import { ActionIcon, Group, Indicator, Text } from "@mantine/core";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartStore } from "@/modules/cart/cart.store";

export function Header() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);

  // Only get cart items after component mounts (client-side only)
  const totalItems = mounted
    ? items.reduce((total, item) => total + item.quantity, 0)
    : 0;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Group justify="space-between" h={60} px="md">
      <Link href="/" style={{ textDecoration: "none" }}>
        <Text size="xl" fw={700} c="blue">
          E-Commerce
        </Text>
      </Link>

      <Link href="/cart">
        <Indicator
          label={totalItems > 0 ? totalItems : undefined}
          size={16}
          color="red"
          disabled={totalItems === 0}
        >
          <ActionIcon variant="subtle" size="lg">
            <ShoppingCart size={20} />
          </ActionIcon>
        </Indicator>
      </Link>
    </Group>
  );
}
