

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.DItV9rYs.js","_app/immutable/chunks/index.eSnM8e__.js","_app/immutable/chunks/vendor.DRR018_L.js"];
export const stylesheets = ["_app/immutable/assets/index.L31h5IkG.css"];
export const fonts = [];
