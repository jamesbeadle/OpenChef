

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.fRaEHGAs.js","_app/immutable/chunks/index.8vkZ-a50.js","_app/immutable/chunks/vendor.JWOfw24h.js"];
export const stylesheets = ["_app/immutable/assets/index.Bv31WVGE.css"];
export const fonts = [];
