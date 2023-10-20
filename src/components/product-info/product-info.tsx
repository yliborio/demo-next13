"use client";
import { FakeAPIProduct } from "core/types/product";
import styles from "./product-info.module.scss";
import { CartIcon } from "../icons/cart-icon";
import Image from "next/image";
import { useCart } from "core/hooks/useCart/useCart";

interface ProductInfoProps {
  product: FakeAPIProduct;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addProduct } = useCart();
  const handleChange = () => {
    addProduct(product);
  };

  return (
    <div className={styles["container"]}>
      <Image
        alt=""
        src={product.image}
        sizes="100vw"
        width={0}
        height={0}
        className={styles["image"]}
      />
      <div className={styles["info"]}>
        <div className={styles["title"]}>{product.title}</div>
        <span className={styles["description"]}>Description:</span>
        <div className={styles["content"]}>{product.description}</div>
        <button className={styles["button"]} onClick={handleChange}>
          <span>Add to Cart</span>
          <CartIcon fillColor="white" />
        </button>
      </div>
    </div>
  );
};
