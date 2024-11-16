

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.CqyPUsef.js","_app/immutable/chunks/index.8vkZ-a50.js","_app/immutable/chunks/vendor.JWOfw24h.js"];
export const stylesheets = ["_app/immutable/assets/index.Bv31WVGE.css"];
export const fonts = [];
