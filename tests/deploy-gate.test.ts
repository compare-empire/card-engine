import { test } from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

// One repo, four Vercel projects: each project sets SITE_ID, and the gate
// builds it only for [deploy] (every site) or [deploy:<its id>].
const run = (msg: string, env = "production", site: string | null = "gundam") => {
  const e: NodeJS.ProcessEnv = { ...process.env, VERCEL_GIT_COMMIT_MESSAGE: msg, VERCEL_ENV: env };
  delete e.SITE_ID;
  if (site !== null) e.SITE_ID = site;
  return spawnSync("bash", ["scripts/vercel-ignore-build.sh"], { env: e }).status;
};

test("builds only when the SUBJECT names this site, or every site", () => {
  assert.equal(run("data(gundam): daily prices [deploy:gundam]"), 1);
  assert.equal(run("data(ygo): daily prices [deploy:ygo]"), 0);
  assert.equal(run("release: scheduled production deploy [deploy:lorcana] [deploy:gundam]"), 1);
  assert.equal(run("release: urgent engine fix [deploy]", "production", "cyberpunk"), 1);
  assert.equal(run("feat: thing\n\nno [deploy] or [deploy:gundam] marker on purpose"), 0);
  assert.equal(run("feat: thing"), 0);
});
test("a project without SITE_ID never builds", () => {
  assert.equal(run("x [deploy]", "production", null), 0);
});
test("previews need [preview]", () => {
  assert.equal(run("feat [deploy]", "preview"), 0);
  assert.equal(run("feat [preview]", "preview"), 1);
});
test("every Vercel build selects its site by copy", () => {
  const v = JSON.parse(readFileSync("vercel.json", "utf8")) as { buildCommand?: string; ignoreCommand?: string };
  assert.match(v.buildCommand ?? "", /scripts\/use-site\.sh --copy && next build/);
  assert.equal(v.ignoreCommand, "bash scripts/vercel-ignore-build.sh");
});
