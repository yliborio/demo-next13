"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./page.module.scss";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    router.push(`/product/${inputValue}`);
  };

  global?.window?.addEventListener("keydown", (event) => {
    if (event?.code === "Enter") {
      handleClick();
    }
  });

  return (
    <div className={styles["container"]}>
      <span className={styles["title"]}>Search by product id</span>
      <div className={styles["action"]}>
        <input
          className={styles["input"]}
          id="product-id"
          onChange={handleChange}
          placeholder="Product ID"
        />
        <button className={styles["button"]} onClick={handleClick}>
          Search
        </button>
      </div>
    </div>
  );
}
