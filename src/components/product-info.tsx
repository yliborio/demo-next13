import { FakeAPIProduct } from "core/types/product";
import styles from "./product-info.module.scss";

interface ProductInfoProps {
  product: FakeAPIProduct;
}

export const ProductInfo = (props: ProductInfoProps) => {
  const { product } = props;

  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        {product.title}
        <span>{` - ${product.rating.rate}/5  (${product.rating.count})`}</span>
      </div>
      <img alt="" src={product.image} className={styles["product-image"]} />
      <span className={styles["description"]}>{product.description}</span>
      <span className={styles["price"]}>{`Price: $${product.price}`} </span>
    </div>
  );
};
