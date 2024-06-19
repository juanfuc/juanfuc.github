

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BqdL0vFu.js","_app/immutable/chunks/scheduler.BaiVm2Fr.js","_app/immutable/chunks/index.DWRkMoV3.js","_app/immutable/chunks/entry.BZfwDeSD.js"];
export const stylesheets = [];
export const fonts = [];
