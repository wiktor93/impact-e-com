import Head from "next/head";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { PublicLayout } from "@/misc/layouts/public-layout";
import { CategoriesPage } from "@/modules/categories/components/categories-page";
import { getCategories } from "@/modules/categories/categories.api";

export const getServerSideProps = async () => {
  const categories = await getCategories();
  return {
    props: {
      initialCategories: categories,
    },
  };
};

export default function Home({
  initialCategories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>E-Commerce - Homepage</title>
        <meta name="description" content="Online store with products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PublicLayout>
        <CategoriesPage initialCategories={initialCategories} />
      </PublicLayout>
    </>
  );
}
