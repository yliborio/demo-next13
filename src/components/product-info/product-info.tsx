"use client";
import { FakeAPIProduct } from "core/types/product";
import styles from "./product-info.module.scss";
import { CartIcon } from "../icons/cart-icon";

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
      <img src={product?.image} alt="" className={styles["image"]} />
      <div className={styles["info"]}>
        <div className={styles["title"]}>{product.title}</div>
        <span>Description:</span>
        <div className={styles["description"]}>{product.description}</div>
        <button className={styles["button"]} onClick={handleChange}>
          <span>Add to Cart</span>
          <CartIcon />
        </button>
      </div>
    </div>
  );
};
