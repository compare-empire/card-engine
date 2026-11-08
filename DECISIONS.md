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
