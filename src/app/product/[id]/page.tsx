import { ProductInfo } from "core/components/product-info";
import { FakeAPIProduct } from "core/types/product";

interface PageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const data = await fetch(`https://fakestoreapi.com/products`);
  const products: FakeAPIProduct[] = await data.json();
  return products.map((item) => ({ id: item.id.toString() }));
}

export default async function Page(props: PageProps) {
  const {
    params: { id },
  } = props;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: FakeAPIProduct = await data.json();

  return <ProductInfo product={product} />;
}
