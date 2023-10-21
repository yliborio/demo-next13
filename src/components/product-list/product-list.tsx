"use client";

import { FakeAPIProduct } from "core/types/product";
import { ProductCard } from "../product-card/product-card";
import styles from "./product-list.module.scss";

import { useProducts } from "core/hooks/useProducts/useProducts";

interface ProductListProps {
  products: FakeAPIProduct[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const filteredProducts = useProducts(products);

  return (
    <div className={styles["container"]}>
      {filteredProducts?.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
      {filteredProducts?.length === 0 && (
        <span className={styles["empty"]}>No products found :(</span>
      )}
    </div>
  );
};
