import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "inusidian-web",
    domains: ["inusidian-test.chihuahuawashawasha.com"],
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-10",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
      ASSETS: bindings.assets(),
      NEXT_PUBLIC_APP_BASE_URL: bindings.secret(),
      NEXT_PUBLIC_API_URL: bindings.secret(),
      AUTH0_DOMAIN: bindings.secret(),
      AUTH0_CLIENT_ID: bindings.secret(),
      AUTH0_CLIENT_SECRET: bindings.secret(),
      AUTH0_SECRET: bindings.secret(),
      AUTH0_AUDIENCE: bindings.secret(),
    },
  }),
});
