import axios from "axios";
import type { Category } from "./categories.types";
import { categoryToSlug } from "./categories.utils";

const API_BASE_URL = "https://fakestoreapi.com";

export async function getCategories(): Promise<Category[]> {
  const { data } = await axios.get<string[]>(
    `${API_BASE_URL}/products/categories`
  );

  // Transform string array to Category objects with consistent slug mapping
  return data.map((categoryName) => ({
    name: categoryName,
    slug: categoryToSlug(categoryName),
  }));
}
