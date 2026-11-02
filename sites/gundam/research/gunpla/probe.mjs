// Input: a JSON list of { key, name, base, market } (the 2026-10-28 run used
// candidates.txt plus every card store); output: store-probe-2026-10-28.json.
// One-off probe (temporary workflow): which Shopify stores sell Gunpla, in
// which collections, and whether their listings carry the kit's JAN barcode.
// Two stores at a time (Shopify 429s a runner that pages many shops at once).
import fs from "node:fs";

const UA = "Mozilla/5.0 (compatible; GundamCompareBot/1.0; +https://gundamcompare.com)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url, tries = 2) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: { "user-agent": UA, accept: "application/json" }, redirect: "follow", signal: AbortSignal.timeout(20000) });
      if (r.status === 429) { await sleep(5000); continue; }
      const text = await r.text();
      let json = null;
      try { json = JSON.parse(text); } catch {}
      return { status: r.status, json, finalUrl: r.url };
    } catch (e) {
      if (i === tries - 1) return { status: 0, json: null, error: String(e.message || e).slice(0, 120) };
    }
  }
  return { status: 429, json: null };
}

const KIT = /gunpla|plamo|model[\s-]*kits?|plastic[\s-]*models?|bandai[\s-]*(hobby|spirits|model)|master[\s-]*grade|high[\s-]*grade|real[\s-]*grade|perfect[\s-]*grade|entry[\s-]*grade|\b(hguc|hgce|hgbf|hgbd|mgex|mgsd|rg|mg|pg|hg|eg|sd)\b|gundam(?!.*(card|tcg|ccg|single|sealed|booster|deck))/i;
const NOT = /card|tcg|ccg|singles?|sealed|booster|starter|deck|sleeve|binder|playmat|event|ticket|pokemon|magic|lorcana|one[\s-]*piece|yu-?gi/i;
const KIT_TITLE = /\b(hg|hguc|hgce|hgbf|hgbd|hgbc|hgac|hgib|hgwfm|rg|mg|mgex|mgsd|pg|eg|sd|sdcs|re\/100|full mechanics|entry grade|high grade|master grade|real grade|perfect grade)\b|1\/(144|100|60)\b|gunpla/i;
const JAN = /\b(45\d{11})\b/;

const ISO = { US: "US", UK: "GB", CA: "CA", AU: "AU", SG: "SG", EU: "ES", NZ: "NZ" };

async function probe(s) {
  const base = s.base.replace(/\/$/, "");
  const out = { ...s, shopify: false };
  const p = await get(`${base}/products.json?limit=1`);
  if (!p.json?.products) { out.status = p.status; out.error = p.error; return out; }
  out.shopify = true;
  out.finalBase = p.finalUrl ? new URL(p.finalUrl).origin : base;
  const cart = await get(`${base}/cart.js?country=${ISO[s.market] || "US"}`);
  out.currency = cart.json?.currency ?? null;
  // collections
  const cols = [];
  for (let page = 1; page <= 4; page++) {
    const c = await get(`${base}/collections.json?limit=250&page=${page}`);
    const list = c.json?.collections ?? [];
    cols.push(...list);
    if (list.length < 250) break;
    await sleep(500);
  }
  const hits = cols
    .filter((c) => KIT.test(`${c.handle} ${c.title}`) && !NOT.test(`${c.handle} ${c.title}`))
    .map((c) => ({ handle: c.handle, title: c.title, count: c.products_count ?? null }));
  out.collections = hits.slice(0, 40);
  // Sample: the biggest-looking candidate collections (or the catalogue search).
  const sampleHandles = hits
    .slice()
    .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
    .slice(0, 3)
    .map((h) => h.handle);
  const seen = new Map();
  for (const h of sampleHandles) {
    for (let page = 1; page <= 8; page++) {
      const r = await get(`${base}/collections/${h}/products.json?limit=250&page=${page}`);
      const list = r.json?.products ?? [];
      for (const pr of list) seen.set(pr.id, pr);
      if (list.length < 250) break;
      await sleep(700);
    }
    await sleep(500);
  }
  // Stores without a kit collection: search their catalogue.
  if (!seen.size) {
    const r = await get(`${base}/search/suggest.json?q=gunpla&resources[type]=product&resources[limit]=10`);
    out.suggest = (r.json?.resources?.results?.products ?? []).map((x) => x.title).slice(0, 10);
  }
  const prods = [...seen.values()];
  const kits = prods.filter((x) => KIT_TITLE.test(x.title) && !NOT.test(x.title));
  const v0 = (x) => x.variants?.[0] ?? {};
  out.sampled = prods.length;
  out.kitLike = kits.length;
  out.inStock = kits.filter((x) => x.variants?.some((v) => v.available)).length;
  out.hasBarcodeKey = kits.some((x) => "barcode" in v0(x));
  out.janInSku = kits.filter((x) => x.variants?.some((v) => JAN.test(String(v.sku || "")) || JAN.test(String(v.barcode || "")))).length;
  out.janInBody = kits.filter((x) => JAN.test(String(x.body_html || "").replace(/<[^>]+>/g, " "))).length;
  out.janAnywhere = kits.filter(
    (x) => x.variants?.some((v) => JAN.test(String(v.sku || "")) || JAN.test(String(v.barcode || ""))) || JAN.test(String(x.body_html || "").replace(/<[^>]+>/g, " ")),
  ).length;
  out.vendors = Object.entries(kits.reduce((m, x) => ((m[x.vendor] = (m[x.vendor] || 0) + 1), m), {})).sort((a, b) => b[1] - a[1]).slice(0, 5);
  out.samples = kits.slice(0, 6).map((x) => ({ t: x.title, sku: v0(x).sku ?? null, price: v0(x).price, img: !!x.images?.length }));
  return out;
}

const list = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const results = [];
const queue = list.slice();
await Promise.all(
  [0, 1].map(async () => {
    while (queue.length) {
      const s = queue.shift();
      const r = await probe(s);
      results.push(r);
      console.log(`${r.shopify ? "SHOP" : "----"} ${r.market} ${r.base} ${r.currency ?? ""} cols=${r.collections?.length ?? 0} kits=${r.kitLike ?? 0} instock=${r.inStock ?? 0} jan=${r.janAnywhere ?? 0} ${r.error ?? r.status ?? ""}`);
      await sleep(1200);
    }
  }),
);
fs.writeFileSync(process.argv[3], JSON.stringify(results, null, 1));
