import {
  Alert,
  Button,
  Card,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { CartItemComponent } from "./cart-item";
import { useCartStore } from "../cart.store";
import { formatPrice } from "@/misc/utils/format-price";

export function CartPage() {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } =
    useCartStore();

  const totalPrice = getTotalPrice();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    updateQuantity(productId, quantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <>
      <Group justify="space-between" align="center" mb="xl">
        <div>
          <Title order={1}>Shopping Cart</Title>
          <Text c="dimmed" size="lg">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </Text>
        </div>
        <Button
          component={Link}
          href="/"
          leftSection={<ArrowLeft size={16} />}
          variant="subtle"
        >
          Continue Shopping
        </Button>
      </Group>

      {items.length === 0 ? (
        <Alert
          icon={<ShoppingBag size={24} />}
          title="Your cart is empty"
          variant="light"
        >
          <Text mb="md">No products in your cart yet.</Text>
          <Button component={Link} href="/" variant="filled">
            Start Shopping
          </Button>
        </Alert>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Stack gap="md">
              {items.map((item) => (
                <CartItemComponent
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </Stack>
          </div>

          <div>
            <Card withBorder radius="md" p="lg" pos="sticky" top={20}>
              <Title order={3} mb="md">
                Order Summary
              </Title>

              <Group justify="space-between" mb="xs">
                <Text>Subtotal ({itemCount} items)</Text>
                <Text>{formatPrice(totalPrice)}</Text>
              </Group>

              <Group justify="space-between" mb="xs">
                <Text>Shipping</Text>
                <Text c="green">Free</Text>
              </Group>

              <Divider my="md" />

              <Group justify="space-between" mb="xl">
                <Text size="lg" fw={700}>
                  Total
                </Text>
                <Text size="lg" fw={700}>
                  {formatPrice(totalPrice)}
                </Text>
              </Group>

              <Stack gap="md">
                <Button size="lg" fullWidth>
                  Proceed to Checkout
                </Button>

                <Button
                  variant="subtle"
                  color="red"
                  onClick={handleClearCart}
                  fullWidth
                >
                  Clear Cart
                </Button>
              </Stack>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
