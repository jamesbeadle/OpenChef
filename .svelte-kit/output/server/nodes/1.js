

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.T9nGsBbJ.js","_app/immutable/chunks/index.BWltrYsd.js","_app/immutable/chunks/vendor.DujwmAfd.js"];
export const stylesheets = ["_app/immutable/assets/index.C4Bc4bF6.css"];
export const fonts = [];
