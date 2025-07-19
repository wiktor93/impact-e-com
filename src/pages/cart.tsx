import Head from "next/head";
import { PublicLayout } from "@/misc/layouts/public-layout";
import { CartPage } from "@/modules/cart/components/cart-page";
import { useCartStore } from "@/modules/cart/cart.store";

export default function Cart() {
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const itemCount = getTotalItems();

  return (
    <>
      <Head>
        <title>E-Commerce - Cart ({itemCount} items)</title>
        <meta name="description" content="Your shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PublicLayout>
        <CartPage />
      </PublicLayout>
    </>
  );
}
