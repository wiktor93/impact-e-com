import { Badge, Button, Card, Group, Image, Text, Title } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, ShoppingCart, Star } from "lucide-react";
import { formatPrice } from "@/misc/utils/format-price";
import { useCartStore } from "@/modules/cart/cart.store";
import type { Product } from "../products.types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart(product);

    notifications.show({
      title: "Added to cart",
      message: `${product.title} has been added to your cart`,
      color: "green",
      icon: <Check size={16} />,
    });
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Card.Section className="h-[200px] overflow-hidden">
        <Image
          src={product.image}
          height={200}
          alt={product.title}
          fit="contain"
          p="md"
          className="max-h-full object-contain"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Badge color="blue" variant="light" tt="capitalize">
          {product.category}
        </Badge>
        <Group gap="xs">
          <Star size={14} fill="currentColor" />
          <Text size="sm" c="dimmed">
            {product.rating.rate} ({product.rating.count})
          </Text>
        </Group>
      </Group>

      <Title order={4} lineClamp={2} mb="sm">
        {product.title}
      </Title>

      <Text size="sm" c="dimmed" lineClamp={3} mb="md">
        {product.description}
      </Text>

      <Group justify="space-between" mt="auto">
        <Text size="xl" fw={700} c="blue">
          {formatPrice(product.price)}
        </Text>
        <Button
          leftSection={<ShoppingCart size={16} />}
          onClick={handleAddToCart}
          variant="filled"
        >
          Add to Cart
        </Button>
      </Group>
    </Card>
  );
}
