// src/utils/slug.js
export function toSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
