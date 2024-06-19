

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profile/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DO9Fv9Gg.js","_app/immutable/chunks/index.uARDNys-.js","_app/immutable/chunks/vendor.BPSFSo_a.js"];
export const stylesheets = ["_app/immutable/assets/index.CB7bl5hP.css"];
export const fonts = [];
