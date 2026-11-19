# Decisions (card engine)

Engine-wide decisions since the four repos were merged. Older decisions, and
anything about one game, are in `sites/<id>/DECISIONS.md`.

## 2026-11-02: One repo for the card engine

**Context.** Gundam, Lorcana, YGO and Cyberpunk Compare ran one engine from
four repos, kept byte-identical by `engine-sync.sh` and a weekly drift check.
Every engine change was four PRs, four CI runs and four sets of workflows; nine
monitors mailed the owner separately. The owner approved consolidating into a
GitHub organization (2026-11-02).

**Decision.** One repo, `compare-empire/card-engine`: the engine once at the
root, each site in `sites/<id>/`. `scripts/use-site.sh` selects a site by
linking (Actions, local) or copying (Vercel) its config, content, data and
public files into the paths the engine already reads, so the engine code is
unchanged and every page and URL stays the same. Each site keeps its Vercel
project, domain, env vars, eBay keys and budget. The deploy gate is per site
(`[deploy:<id>]`; `[deploy]` = every site), so it is still one build per site
per day. The four histories are merged (site files moved into `sites/<id>/`
first, so `git log --follow` reaches back).

**Switching over one site at a time.** Every scheduled job checks for
`sites/<id>/LIVE` first. Until that file exists the old repo keeps running the
site; the commit that adds it is the switch, made with the Vercel reconnect
and the old repo's crons turned off, so a site is never imported (or its eBay
calls spent) twice. Cyberpunk goes first: smallest, newest, least traffic.

**Ops status.** The four monitors publish one `ops-status` branch with
`<id>/status.json`, written by a single job after the matrix so they never race.

**Forum.** The four sites share one `forum` branch, each with its own
`forum-<key>.json` and `held/<site>/` folder, rather than four branches.

**Rejected.** A config registry that imports all four sites (bundles every
site's stores and posts into each build); npm workspaces (Next would have to
transpile a shared package and every import would change).

## 2026-11-08 — One Our sites page instead of footer cross-links

From the owner's Search Console audit of DexCompare: its only links from other sites were ~9,000 site-wide footer
links from our own sites, all to its home page, with the brand or a keyword as the anchor. They pass no authority,
and a network of same-owner sites linking each other from every page is the pattern Google's link-spam policy warns
about. CamCompare indexes well with more of them, so they are not what holds a site back, but they buy nothing.
DexCompare's footer went first (CompareEmpire #153); every other site now does the same: the footer links one
internal page, `/our-sites`, and that page links each other family site once, by its plain name, from
`FAMILY_SITES` (`lib/family-network.ts`, unchanged; `footerSisters` stays for the shared test). Every other footer
link, page URL and title is unchanged. Cross-traffic still comes from the price blocks on the deals and pre-order pages.

## 2026-11-08 — Christmas is one quiet line, not a costume

Owner: "some of the christmas themes on our websites are a bit too much - the theme must match the domain". The
2026-11-01 Christmas look (falling snow, a strand of lights, trees, presents, candy canes, stockings, a Santa hat on the
logo, candy-cane stripes and seasonal palette swaps) is gone, with its art in `public/xmas/`. The season keeps at most ONE
touch, drawn in the site's own colours: the gifts line in the hero (`ChristmasGifts`, `.xmas-pill`), a plain pill that inherits the hero's text colour, with no gift icon or red glow. (wording still `SITE.christmas`). It still starts and ends by itself (`lib/season.ts`, 1 November to
Boxing Day), and the tests pin that nothing else comes back. Black Friday and Cyber Monday (strip, pages, nav) are
unchanged. The same rule went to every sister site: the site's own identity first.

## 2026-11-08 — The alert form asks, unticked, for a weekly price drops email

Owner, on the 2026-11-08 competitor scan: "implement all of this" (gap #5, a weekly email of the biggest price drops).
The shared `PriceAlertForm.tsx` (byte-identical on every sister site) gains one UNTICKED box, "Also email me this site's
biggest price drops once a week", sent as `weekly` beside the alert. RiftCompare's alert service does the rest
(TCGEmpire DECISIONS.md, "A weekly biggest-drops email for the sister sites"): it rides the same double opt-in, builds
one edition a week from this site's own `/alert-feed.json`, links only to this site's pages (no eBay or Amazon), and
every email has a one-click stop. This site still stores no address and holds no mail key, and nothing new pops up.

## 2026-11-14: eBay and Amazon are never the cheapest

A product page on a sister engine showed an eBay row badged "Best price" and named eBay in its "Cheapest in" box:
`priceRows` took the first in-stock row whatever its source, and `summarize` kept eBay as a market's cheapest (so list
tiles and the quick buy could lead with an eBay price). Both now skip eBay and Amazon (`neverCheapest` in
`src/lib/price-rows.ts`); eBay keeps its pinned row and its own ad list (`e`), and a paid alternative is never cheaper
than the cheapest. `tests/never-cheapest.test.ts` pins it. The summary is rebuilt by the next import.

## 2026-11-17: URL freeze, and two sides of the network, one footer link

Owner, from the Grok growth report (items 5 and 9): stop the sitewide cross-links between the sites, and freeze URLs.
The network now has two sides (`TCG_SIDE`, `sameSide`, `isTcgSide` in `src/lib/family-network.ts`, the same file in every repo): the
card-game and wargame sites on one, perfume, K-beauty, car parts, cameras, figures, sports cards and tech on the other. `clusterSisters`
and `footerSisters` return same-side sites only, so deal and pre-order tiles, the data jobs' copied feeds and the `/our-sites` (or
`/network`) list never cross. The footer keeps its single link to `/our-sites`; the "Every Compare Empire site" link to
compareempire.com is gone from the card sites. SportsCardCompare is on the other side from the card sites (its search results no
longer offer their searches). Where this repo had a repeated block of sister links (a blog "Also from us" aside, "Compare other TCGs"
on every card page, non-card sisters in `SITE.sisterSites`) it is removed. A contextual link from a guide to another game stays.
DexCompare's links read dexcompare.io (the old host is still accepted in a feed until Dex republishes). Not changed: price alerts,
`alert-feed.json`, the family feeds and the sister data reads: they are data, not links. Also a "URL freeze" rule in CLAUDE.md:
no mass path change without a redirect map, agents never flip hosts, no pop-unders or surprise navigation (this repo had none).

## 2026-11-18: Share for a deal, and guides, sets and Deal Finder can be shared (owner)

Owner: "a share feature … the ability to share pages and guides", then "if you share … you can open Deal Finder … gives
incentive". Ported from TCG Prices (same `lib/share.ts` and `ShareButton`). Half of browsers (`share_arm` in localStorage,
`pickShareArm`) see "Share · get a deal"; after a share completes the button opens a small card under itself (the visitor's own
tap, ✕ to close) with today's best store deal in their market and a link to Deal Finder, from the static `/share-deal.json`
(`force-static`, built with the release, fetched only then). Store rows only, never eBay, Amazon or TCGplayer, and nothing that
was not already free. The other half is the control. Events `share { medium, arm }`, `share_unlock { medium }`,
`share_visit { medium }`. Guides, set pages and Deal Finder gain the button. Read the share rate per arm after two weeks; keep
the offer only if it raises sharing.

## 2026-11-19: eBay calls go to sealed first, the most popular first; cards get what is left (owner)

The owner, once singles were live on several sites: "we cannot go past the eBay quota … everything goes to sealed
products first, or at least the most in-demand sealed products, and not the least popular ones … they have TCGplayer
prices, and they also have their own store prices … we cannot kill the eBay quota." A card page already shows
TCGplayer's market price and the stores'; a sealed product's eBay price is the one shoppers compare against. So every
eBay plan now searches every due sealed product, ordered by demand, before any single, and a single gets a call only
from what sealed leaves. Measured 17-18 Nov before the change: no keyset ran out, but several shared ones ended the
day at 88-96% of 5,000, and on RiftCompare the singles pass (2,081 calls on 18 Nov) ran before the sealed pass with
no ceiling of its own.

Engine: `planEbayRefresh` ranks every sealed product above every card (`sealedFirst`), the most clicked first, and in
each market a due sealed product goes before a due card. The daily budget (`SITE.ebay.dailyBudget`) and the app's
live remaining count are unchanged. `tests/ebay-plan.test.ts` pins it.

## 2026-11-19: Search-engine-first audit after the November 2026 core update

Google's core-update guidance asks whether a page exists mainly to help people or mainly to catch a search, and names
content "spread across a large network of sites" and re-dating pages to look fresh as warning signs. What changed here:

- **Seasonal sale pages.** The same template put Boxing Day, January sales and Lunar New Year (and Valentine's Day where
  a site has it) pages on every Compare site, indexed all year, each listing the same deals as the Black Friday page.
  `saleIndexable` in `lib/sale-seasons.ts`: Lunar New Year and Valentine's Day pages are never indexed, Boxing Day and
  January sales only from three weeks before the homepage links them until a week after they end; out of season they are
  noindex, follow and out of the sitemap (`withoutOffSeasonSales`). The URLs stay live all year (URL freeze).
- **Honest sitemap dates.** About, methodology, store-listing and similar prose pages no longer carry a lastmod of the
  latest import: their words do not change with prices.
- The footer no longer links the Lunar New Year page.

Black Friday and Cyber Monday pages are unchanged (in season). Judge the effect on 1 to 8 Dec against 3 to 9 Nov.
