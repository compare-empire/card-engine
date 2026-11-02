#!/usr/bin/env bash
# Typecheck and test the engine against every site in sites/ (what CI runs),
# then leave the first site selected. Usage: npm run check:all
set -euo pipefail
status=0
for dir in sites/*/; do
  id="$(basename "$dir")"
  bash scripts/use-site.sh "$id" >/dev/null
  echo "== $id"
  npx tsc --noEmit || status=1
  npm test --silent 2>&1 | grep -E '^# (pass|fail)' || status=1
done
exit $status
