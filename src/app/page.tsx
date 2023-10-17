import { FakeAPIProduct } from "core/types/product";
import styles from "./page.module.scss";
import { ProductList } from "core/components/product-list/product-list";

export default async function Home() {
  const data = await fetch(`https://fakestoreapi.com/products`);
  const products: FakeAPIProduct[] = await data.json();

  return (
    <main className={styles.main}>
      <ProductList products={products} />
    </main>
  );
}
