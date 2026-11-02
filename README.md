# Card engine

One repository for the Compare Empire card-game price sites that share one engine:

| Site | Folder | Domain | Daily import (UTC) |
|---|---|---|---|
| Gundam Compare | `sites/gundam/` | gundamcompare.com | 18:17 |
| Lorcana Compare | `sites/lorcana/` | lorcanacompare.com | 06:17 |
| YGO Compare | `sites/ygo/` | ygocompare.com | 12:17 |
| Cyberpunk Compare | `sites/cyberpunk/` | cyberpunkcompare.com | 00:17 |

Until 2026-11-02 these were four repos (`Specifxx/GundamCompare`, `lorcanacompare`,
`ygocompare`, `cyberpunkcompare`) kept byte-identical by `engine-sync.sh`. Their
histories are merged here; each site's own history is under `sites/<id>/`.

## Layout

```
src/ scripts/ tests/ next.config.js ...   the engine (once, game-agnostic)
sites/<id>/site.config.ts                 the game's settings (SITE)
sites/<id>/content/                       stores, blog, creators, forum copy, preorders, logo
sites/<id>/app/                           icons and share images (copied into src/app)
sites/<id>/public/  data/                 static files; the committed JSON the site serves
sites/<id>/research/ docs/ DECISIONS.md   that site's notes and decisions (README.md, CLAUDE.md: as they were)
```

`bash scripts/use-site.sh <id>` (or `npm run site -- <id>`) selects a site: it
links `src/site.config.ts`, `src/content`, `data` and `public` to `sites/<id>/`
and copies its icons into `src/app/` (all git-ignored). Every command after it
(dev, build, import, tests) runs as that site. `--copy` copies instead of
linking; Vercel builds use it.

```
npm ci
bash scripts/use-site.sh lorcana
npm run dev                      # Lorcana Compare on localhost
npm run check:all                # typecheck + tests against every site
```

## Deploys

Each site keeps its own Vercel project, domain and environment variables. Every
project builds from this repo with `SITE_ID=<id>` (`vercel.json` runs
`use-site.sh --copy && next build`), and its ignored-build step
(`scripts/vercel-ignore-build.sh`) builds production only when the commit
SUBJECT names it:

- `[deploy:<id>]` releases that site. Each site's daily data commit carries it.
- `[deploy]` releases every site (urgent engine releases only).
- Previews need `[preview]`; `claude/*`, `forum` and `reports` never deploy.

An engine change on `main` reaches each site with that site's next daily release.

## Workflows

A site's scheduled jobs (import, monitor, fallback release) run from this repo
only once `sites/<id>/LIVE` exists. The file is added in the commit that
switches that site over (its Vercel project points here, its secrets are set
and the old repo's crons are off), so no site is ever imported twice.

- `refresh-prices.yml`: one cron per site; imports into `sites/<id>/data` and
  commits `data(<id>): ... [deploy:<id>]`.
- `ci.yml`: typecheck, lint and tests for each site.
- `ops-monitor.yml`: every three hours, all four sites in one run.
- `production-deploy.yml`: 22:00 UTC fallback release for any site that has not
  released in 20 hours; manual release of one site or all.

Secrets are per site: `<PREFIX>_EBAY_CLIENT_ID`, `<PREFIX>_EBAY_CLIENT_SECRET`,
`<PREFIX>_INDEXNOW_KEY` with PREFIX `GUNDAM`, `LORCANA`, `YGO`, `CYBERPUNK`.
Gundam, Lorcana and YGO hold the same shared eBay app; Cyberpunk has its own.

## Adding a game

Copy a `sites/<id>/` folder, edit its `site.config.ts` and `content/`, add the id
to the workflows' site lists, and create a Vercel project with `SITE_ID=<id>`.
