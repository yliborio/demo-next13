import { ProductCard } from "core/components/product-card/product-card";
import { FakeAPIProduct } from "core/types/product";

interface PageProps {
  params: { id: string };
}

export default async function Page(props: PageProps) {
  const {
    params: { id },
  } = props;
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product: FakeAPIProduct = await data.json();

  return <ProductCard product={product} />;
}
