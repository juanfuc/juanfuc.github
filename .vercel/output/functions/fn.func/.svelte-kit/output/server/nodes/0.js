import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BNuItjHL.js","_app/immutable/chunks/scheduler.DsjCYe6-.js","_app/immutable/chunks/index.BXruS39i.js","_app/immutable/chunks/dsv.CcDVc-A1.js","_app/immutable/chunks/Icon.DavSjnCF.js","_app/immutable/chunks/entry.RX4OB0Lq.js"];
export const stylesheets = ["_app/immutable/assets/0.Cf9GOToT.css"];
export const fonts = [];
