import { SimpleGrid, Text, Title } from "@mantine/core";
import { CategoryCard } from "./category-card";
import { Category } from "../categories.types";

interface CategoriesPageProps {
  initialCategories: Category[];
}

export function CategoriesPage({ initialCategories }: CategoriesPageProps) {
  return (
    <>
      <Title order={1} mb="xl">
        Product Categories
      </Title>

      <Text mb="lg" c="dimmed">
        Select a category to browse products ({initialCategories.length}{" "}
        available)
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="md">
        {initialCategories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </SimpleGrid>
    </>
  );
}
