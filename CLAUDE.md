# Working in this repo

Read `README.md` first. One engine serves Gundam, Lorcana, YGO and Cyberpunk
Compare; each site lives in `sites/<id>/`. Select one with
`bash scripts/use-site.sh <id>` before running anything. Each site's own
`sites/<id>/CLAUDE.md` still holds its game rules (eBay budget, matching
quirks, the name); where it talks about "this repo" or engine-sync, this file wins.

## The engine stays game-agnostic

Engine code (`src/`, `scripts/`, `tests/`, configs) must not name a game.
Anything one game needs is an option in `sites/<id>/site.config.ts`, off by
default, or a file in `sites/<id>/content/`. Run `npm run check:all` (CI runs
the same matrix) before pushing an engine change: it must pass for every site.

## Deploys are gated — never add `[deploy]` to a commit subject

Production builds a site only when the commit SUBJECT carries `[deploy:<id>]`
(that site) or `[deploy]` (every site) (`scripts/vercel-ignore-build.sh`,
`tests/deploy-gate.test.ts`). Each site's daily data commit carries its own
marker: one build per site per day. Never put either marker in a subject on
your own initiative. "Push to prod" means land on `main` and ride each site's
next daily release, unless the owner says it is urgent; then use *Production
deploy* (one site, or all) and say so. Previews need `[preview]`, when the
owner asks. `claude/*` branches never deploy.

## No accounts, no database, no email

Price comparison only. Everything a site serves is the committed JSON in
`sites/<id>/data/` (read through the `data` link by `src/lib/data.ts`).
`sites/gundam/archive/` and `sites/lorcana/archive/` hold the removed account
code; never import from them. Never write anything private to `data/`.

## Cost rules (from Rift Compare, where breaking them exhausted Neon projects)

1. Public data stays in committed files; no database read in any page or route.
2. No `generateStaticParams` that prerenders data-heavy pages at build.
3. No page or route handler revalidates under 21600 seconds; 86400 for slow content.
4. A Vercel build ships only its own site's data (`--copy`, file tracing of `data/`).

## eBay: every site keeps its own keys and budget

Secrets per site (`GUNDAM_`, `LORCANA_`, `YGO_`, `CYBERPUNK_` + `EBAY_CLIENT_ID`,
`EBAY_CLIENT_SECRET`). Gundam, Lorcana and YGO share one eBay app (1,150 /
1,150 / 2,200 calls a day, 4,500 or less together); Cyberpunk has its own app
(2,500). Budgets are `SITE.ebay.dailyBudget`, usage in
`sites/<id>/data/state/ebay-usage.json`. Never move calls between sites, point
a site at another's keys or raise a budget without the owner. Each site's
import hour equals its `SITE.ebay.runHourUtc`; keep them apart.

## Forum and visitor reports

All four sites file into this repo: reports on the `reports` branch under
`inbox/<site>/`, forum posts on the `forum` branch in `forum-<key>.json` with
held posts under `held/<site>/`. Neither branch is ever merged or deployed.

## Matching

`src/lib/import/match.ts`: a wrong match is worse than none. Add a test in
`tests/match.test.ts` (or the site's own rule test) for every new title format.

## The sites watch themselves

`ops-monitor.yml` checks every site every three hours; a failing check fails
the run and GitHub emails the owner. A new scheduled job, external API or limit
gets a check in `scripts/ops-monitor.ts`.

## URL freeze, and no surprise navigation (owner, 2026-11-17; Grok growth report, items 5 and 9)

- **Public URLs are frozen.** No mass path change (renaming a path pattern, moving a folder of pages, a new slug scheme) ships
  without a redirect map that 301s every old URL to its new one, and a test that pins it. An old URL never 404s.
- **Hosts never change.** An agent never flips a site's host or domain. The one change in force is DexCompare's move to
  dexcompare.io (owner); every other host stays as it is.
- **No pop-unders, no `window.open` on load, no cross-host redirects, no interstitials, no ad-network pop scripts.** The only
  automatic navigation is a same-host market choice, and a click never opens anything but what it names.
- **Two sides, one footer link.** The trading-card and wargame sites (tcgprices, Rift, OP, MTG, Dex, Gundam, Lorcana, YGO, Cyberpunk,
  Bandai, Wargame) are one side of the network; Scent, KaeYoung, Motor, Cam, Figure, Sports cards and Compare Empire are the other.
  A site never lists, tiles, searches or links a site on the other side (`sameSide` in `lib/family-network.ts`, the same file in every
  repo). A page carries at most ONE link to another site of ours, in the footer, to `/our-sites` (brand names, one URL each).
  A contextual link from a guide to another game is allowed when it is natural; a block repeated on every page is not.

## Checks

```
npm run check:all      # or, per site: use-site.sh <id>; npm run typecheck; npm run lint; npm test
```

Record engine decisions in `DECISIONS.md` (newest at the bottom); a decision
about one game goes in `sites/<id>/DECISIONS.md`.
