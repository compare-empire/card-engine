#!/usr/bin/env bash
# Point the engine at one site: links src/site.config.ts, src/content, data and
# public to sites/<id>/, and copies that site's icons and share images into
# src/app (Next only reads them there). Every linked path is git-ignored.
#   bash scripts/use-site.sh gundam      (or SITE_ID=gundam)
#   bash scripts/use-site.sh --copy      copies instead of linking (Vercel builds:
#                                        a traced symlink would ship dangling)
set -euo pipefail
mode=link; [ "${1:-}" = "--copy" ] && { mode=copy; shift; }
id="${1:-${SITE_ID:-}}"
[ -n "$id" ] && [ -f "sites/$id/site.config.ts" ] || { echo "use-site: unknown site '$id' (sites/*/)"; exit 1; }
# On Vercel, refuse to build one site onto another site's project: the
# project's production host must carry this site's domain.
domain="$(sed -n 's/^  domain: "\(.*\)",$/\1/p' "sites/$id/site.config.ts" | head -n 1)"
if [ -n "${VERCEL_PROJECT_PRODUCTION_URL:-}" ] && [ -n "$domain" ]; then
  case "$VERCEL_PROJECT_PRODUCTION_URL" in
    "$domain"|*."$domain") ;;
    *) echo "use-site: SITE_ID=$id builds $domain, but this Vercel project serves $VERCEL_PROJECT_PRODUCTION_URL. Refusing."; exit 1 ;;
  esac
fi
rm -rf src/site.config.ts src/content data public
if [ "$mode" = copy ]; then
  cp "sites/$id/site.config.ts" src/site.config.ts; cp -R "sites/$id/content" src/content
  cp -R "sites/$id/data" data; cp -R "sites/$id/public" public
else
  ln -s "../sites/$id/site.config.ts" src/site.config.ts; ln -s "../sites/$id/content" src/content
  ln -s "sites/$id/data" data; ln -s "sites/$id/public" public
fi
for f in apple-icon.png favicon.ico icon.svg opengraph-image.jpg opengraph-image.alt.txt twitter-image.jpg twitter-image.alt.txt; do
  rm -f "src/app/$f"; [ -f "sites/$id/app/$f" ] && cp "sites/$id/app/$f" "src/app/$f"
done
echo "$id" > .site
echo "use-site: $id"
