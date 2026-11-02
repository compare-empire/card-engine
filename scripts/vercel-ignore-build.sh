#!/usr/bin/env bash
# Vercel "Ignored Build Step" for the one-repo card engine. Every site's Vercel
# project watches this repo and sets SITE_ID, so the gate is per site:
#   [deploy]          release EVERY site (an urgent engine release)
#   [deploy:<id>]     release that site only (its daily data commit)
#   exit 0 → skip      exit 1 → build
# Preview/development builds need [preview] in the subject. The SUBJECT only:
# a body that mentions a marker never deploys. Unreadable message → build
# production (fail open). No SITE_ID → never build (a misconfigured project
# must not ship another site's pages).
set -u
msg="${VERCEL_GIT_COMMIT_MESSAGE:-}"
[ -z "$msg" ] && msg="$(git log -1 --format=%B 2>/dev/null || true)"
subject="$(printf '%s\n' "$msg" | head -n 1)"
env="${VERCEL_ENV:-}"
site="${SITE_ID:-}"
if [ -z "$site" ]; then echo "[ignore-build] SITE_ID is not set on this Vercel project — skipping."; exit 0; fi
if [ "$env" = "preview" ] || [ "$env" = "development" ]; then
  printf '%s' "$subject" | grep -qiF -- '[preview]' && { echo "[ignore-build] [preview] — building $site."; exit 1; }
  echo "[ignore-build] previews are off unless the subject carries [preview]."; exit 0
fi
[ -z "$msg" ] && { echo "[ignore-build] message unreadable — building $site (fail open)."; exit 1; }
if printf '%s' "$subject" | grep -qiF -- '[deploy]'; then echo "[ignore-build] [deploy] — releasing every site, $site included."; exit 1; fi
if printf '%s' "$subject" | grep -qiF -- "[deploy:$site]"; then echo "[ignore-build] [deploy:$site] — building $site."; exit 1; fi
echo "[ignore-build] nothing for $site in the subject — skipping."; exit 0
