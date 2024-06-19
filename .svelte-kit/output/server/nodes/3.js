

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bands/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4YN5rl6x.js","_app/immutable/chunks/index.eSnM8e__.js","_app/immutable/chunks/vendor.DRR018_L.js"];
export const stylesheets = ["_app/immutable/assets/index.L31h5IkG.css"];
export const fonts = [];
