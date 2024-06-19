

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BbTGPdZk.js","_app/immutable/chunks/index.uARDNys-.js","_app/immutable/chunks/vendor.BPSFSo_a.js"];
export const stylesheets = ["_app/immutable/assets/index.CB7bl5hP.css"];
export const fonts = [];
