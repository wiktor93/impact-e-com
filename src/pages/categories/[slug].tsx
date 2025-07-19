import Head from "next/head";
import type {
  InferGetServerSidePropsType,
  GetServerSidePropsContext,
} from "next";
import { PublicLayout } from "@/misc/layouts/public-layout";
import { CategoryPage } from "@/modules/categories/components/category-page";
import { getProductsByCategory } from "@/modules/products/products.api";
import { slugToCategory } from "@/modules/categories/categories.utils";

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{ slug: string }>) => {
  const categorySlug = params?.slug;

  if (!categorySlug) {
    return { redirect: { destination: "/", permanent: false } };
  }

  const categoryName = slugToCategory(categorySlug);
  const products = await getProductsByCategory(categoryName);

  return {
    props: {
      initialProducts: products,
      category: categorySlug,
    },
  };
};

export default function Category({
  initialProducts,
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>{`E-Commerce - ${category} Category`}</title>
        <meta
          name="description"
          content={`Products from ${category} category`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PublicLayout>
        <CategoryPage slug={category} initialProducts={initialProducts} />
      </PublicLayout>
    </>
  );
}
