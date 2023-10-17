import { FakeAPIProduct } from "core/types/product";
import styles from "./page.module.scss";
import { ProductInfo } from "core/components/product-info/product-info";

export default async function Home() {
  const data = await fetch(`https://fakestoreapi.com/products`);
  const products: FakeAPIProduct[] = await data.json();

  return (
    <main className={styles.main}>
      <ul>
        {products.map((product) => (
          <li>
            <ProductInfo key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
