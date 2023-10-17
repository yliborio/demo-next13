import { FakeAPIProduct } from "core/types/product";
import { ProductCard } from "../product-card/product-card";
import styles from "./product-list.module.scss";

interface ProductListProps {
  products: FakeAPIProduct[];
}

export const ProductList = ({ products }: ProductListProps) => (
  <div className={styles["container"]}>
    {products?.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
