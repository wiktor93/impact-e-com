import { Alert, Button, Group, SimpleGrid, Text, Title } from "@mantine/core";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProductCard } from "@/modules/products/components/product-card";
import { Product } from "@/modules/products/products.types";
import { slugToCategory } from "@/modules/categories/categories.utils";
import { useCartStore } from "@/modules/cart/cart.store";

interface CategoryPageProps {
  slug: string;
  initialProducts: Product[];
}

export function CategoryPage({ slug, initialProducts }: CategoryPageProps) {
  // Convert slug back to original category name for display
  const categoryName = slugToCategory(slug);

  return (
    <>
      <Group justify="space-between" align="center" mb="xl">
        <div>
          <Title order={1} tt="capitalize">
            {categoryName}
          </Title>
          <Text c="dimmed" size="lg">
            {initialProducts.length} products available
          </Text>
        </div>
        <Button
          component={Link}
          href="/"
          leftSection={<ArrowLeft size={16} />}
          variant="subtle"
        >
          Back to Categories
        </Button>
      </Group>

      {initialProducts.length === 0 && (
        <Alert
          icon={<AlertCircle size={16} />}
          title="No Products"
          variant="light"
        >
          No products found in this category.
        </Alert>
      )}

      {initialProducts.length > 0 && (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
          {initialProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
