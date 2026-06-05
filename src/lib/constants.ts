export const DEMO_VIDEO_ID = "LcACbyWUEuw";
export const DEMO_VIDEO_URL = `https://www.youtube.com/watch?v=${DEMO_VIDEO_ID}`;
export const DEMO_VIDEO_EMBED_URL = `https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
export const DEMO_VIDEO_THUMBNAIL_URL = `https://i.ytimg.com/vi/${DEMO_VIDEO_ID}/hqdefault.jpg`;

export const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#workflow", label: "Workflow" },
  { href: "#product", label: "Product" },
  { href: "#tech", label: "Tech" },
  { href: "#demo", label: "Demo" },
] as const;
