import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.GUay7R8k.js","_app/immutable/chunks/scheduler.BaiVm2Fr.js","_app/immutable/chunks/index.DWRkMoV3.js","_app/immutable/chunks/dsv.CP827gCi.js","_app/immutable/chunks/Icon.Bfq9_xFg.js","_app/immutable/chunks/entry.BZfwDeSD.js"];
export const stylesheets = ["_app/immutable/assets/0.Cf9GOToT.css"];
export const fonts = [];
