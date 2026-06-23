/// <reference types="vite/client" />

// `.yaml` / `.yml` imports are parsed to a default export at build time by the
// yaml plugin in vite.config.js.
declare module "*.yaml" {
  const data: unknown;
  export default data;
}
declare module "*.yml" {
  const data: unknown;
  export default data;
}
