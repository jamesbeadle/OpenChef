

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BtIpyR4C.js","_app/immutable/chunks/index.8vkZ-a50.js","_app/immutable/chunks/vendor.JWOfw24h.js"];
export const stylesheets = ["_app/immutable/assets/index.Bv31WVGE.css"];
export const fonts = [];
