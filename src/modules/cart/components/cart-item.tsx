import {
  ActionIcon,
  Button,
  Card,
  Group,
  Image,
  NumberInput,
  Text,
  Title,
} from "@mantine/core";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { formatPrice } from "@/misc/utils/format-price";
import type { CartItem } from "../cart.types";

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
}

export function CartItemComponent({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdateQuantity(item.product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    onRemove(item.product.id);
  };

  const itemTotal = item.product.price * item.quantity;

  return (
    <Card withBorder radius="md" p="lg">
      <Group align="flex-start" gap="md">
        <Image
          src={item.product.image}
          w={80}
          h={80}
          fit="contain"
          alt={item.product.title}
        />

        <div style={{ flex: 1 }}>
          <Title order={4} lineClamp={2} mb="xs">
            {item.product.title}
          </Title>

          <Text size="sm" c="dimmed" mb="md">
            {formatPrice(item.product.price)} per item
          </Text>

          <Group justify="space-between" align="center">
            <Group gap="xs">
              <ActionIcon
                variant="outline"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus size={16} />
              </ActionIcon>

              <NumberInput
                value={quantity}
                onChange={(value) => handleQuantityChange(Number(value) || 1)}
                min={1}
                max={99}
                w={60}
                hideControls
              />

              <ActionIcon
                variant="outline"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus size={16} />
              </ActionIcon>
            </Group>

            <Group gap="md">
              <Text size="lg" fw={700}>
                {formatPrice(itemTotal)}
              </Text>

              <ActionIcon variant="subtle" color="red" onClick={handleRemove}>
                <Trash2 size={16} />
              </ActionIcon>
            </Group>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
