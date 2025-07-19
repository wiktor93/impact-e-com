import { Text } from "@mantine/core";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Category } from "../categories.types";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.slug}`} className="block w-full">
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-200 ease-in-out hover:translate-y-[-2px] hover:shadow-md">
        <div className="flex items-center justify-between">
          <Text fw={500} size="lg" tt="capitalize">
            {category.name}
          </Text>
          <ChevronRight size={20} />
        </div>
      </div>
    </Link>
  );
}
