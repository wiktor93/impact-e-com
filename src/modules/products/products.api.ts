import axios from "axios";
import type { Product } from "./products.types";

const API_BASE_URL = "https://fakestoreapi.com";

export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  const { data } = await axios.get<Product[]>(
    `${API_BASE_URL}/products/category/${category}`
  );
  return data;
}

export async function getProduct(id: number): Promise<Product> {
  const { data } = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
  return data;
}

export async function getAllProducts(): Promise<Product[]> {
  const { data } = await axios.get<Product[]>(`${API_BASE_URL}/products`);
  return data;
}
