

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/mulligans/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.CCKv94X5.js","_app/immutable/chunks/index.eSnM8e__.js","_app/immutable/chunks/vendor.DRR018_L.js"];
export const stylesheets = ["_app/immutable/assets/index.L31h5IkG.css"];
export const fonts = [];
