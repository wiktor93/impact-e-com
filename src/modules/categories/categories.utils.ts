// Category map: slug → original name (only for excersice purposes). In real life we would use API to get category by slug.
export const CATEGORY_MAP = {
  electronics: "electronics",
  jewelery: "jewelery",
  "mens-clothing": "men's clothing",
  "womens-clothing": "women's clothing",
} as const;

// Reverse mapa: original name → slug
const REVERSE_CATEGORY_MAP = Object.fromEntries(
  Object.entries(CATEGORY_MAP).map(([slug, name]) => [name, slug])
) as Record<string, string>;

/**
 * Converts category name to URL-safe slug
 * "men's clothing" → "mens-clothing"
 */
export function categoryToSlug(categoryName: string): string {
  return (
    REVERSE_CATEGORY_MAP[categoryName] ||
    categoryName.toLowerCase().replace(/[^a-z0-9]/g, "-")
  );
}

/**
 * Converts slug back to original category name
 * "mens-clothing" → "men's clothing"
 */
export function slugToCategory(slug: string): string {
  return (
    CATEGORY_MAP[slug as keyof typeof CATEGORY_MAP] || slug.replace(/-/g, " ")
  );
}
