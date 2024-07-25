

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BnrQZJQ8.js","_app/immutable/chunks/scheduler.DsjCYe6-.js","_app/immutable/chunks/index.BXruS39i.js","_app/immutable/chunks/entry.RX4OB0Lq.js"];
export const stylesheets = [];
export const fonts = [];
