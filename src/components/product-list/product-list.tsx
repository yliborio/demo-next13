"use client";

import { FakeAPIProduct } from "core/types/product";
import { ProductCard } from "../product-card/product-card";
import styles from "./product-list.module.scss";
import { useFilterStore } from "core/hooks/useFilter/useFilter";
import { Order } from "core/types/order";
import { useProducts } from "core/hooks/useProducts/useProducts";

interface ProductListProps {
  products: FakeAPIProduct[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const filteredProducts = useProducts(products);
  return (
    <div className={styles["container"]}>
      {filteredProducts?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
