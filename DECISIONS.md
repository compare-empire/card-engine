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
