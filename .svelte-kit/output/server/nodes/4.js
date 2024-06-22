

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.D4stecSO.js","_app/immutable/chunks/index.BWltrYsd.js","_app/immutable/chunks/vendor.DujwmAfd.js"];
export const stylesheets = ["_app/immutable/assets/index.C4Bc4bF6.css"];
export const fonts = [];
