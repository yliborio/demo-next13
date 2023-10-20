import { FakeAPIProduct } from "core/types/product";
import Image from "next/image";

import styles from "./cart-item-card.module.scss";
import { useCart } from "core/hooks/useCart/useCart";

interface CartItemCardProps {
  product: FakeAPIProduct;
  quantity: number;
}

export const CartItemCard = ({ product, quantity }: CartItemCardProps) => {
  const { removeProduct } = useCart();
  const handleChange = () => {
    removeProduct(product);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["image"]}>
        <Image alt="" src={product.image} sizes="100vw" width={0} height={0} />
      </div>
      <div className={styles["info"]}>
        <span className={styles["title"]}>{product.title}</span>
        <span className={styles["price"]}>{`$${product.price}`}</span>
        <button className={styles["button"]} onClick={handleChange}>
          Remove
        </button>
        <span>{`Quantity: ${quantity}`}</span>
      </div>
    </div>
  );
};
