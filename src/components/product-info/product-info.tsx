"use client";
import { FakeAPIProduct } from "core/types/product";
import styles from "./product-info.module.scss";
import { CartIcon } from "../icons/cart-icon";
import Image from "next/image";

interface ProductInfoProps {
  product: FakeAPIProduct;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const handleChange = () => {
    window.alert("Not implemented yet!");
    4;
  };

  return (
    <div className={styles["container"]}>
      <Image
        alt=""
        src={product.image}
        sizes="100vw"
        width={0}
        height={0}
        quality={100}
        className={styles["image"]}
      />
      <div className={styles["info"]}>
        <div className={styles["title"]}>{product.title}</div>
        <span className={styles["description"]}>Description:</span>
        <div className={styles["content"]}>{product.description}</div>
        <button className={styles["button"]} onClick={handleChange}>
          <span>Add to Cart</span>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};
