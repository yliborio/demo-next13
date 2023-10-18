"use client";
import { useFilterStore } from "core/hooks/useFilter/useFilter";
import { SearchIcon } from "../icons/search-icon";
import styles from "./search-input.module.scss";

export const SearchInput = () => {
  const { setFilter } = useFilterStore();

  return (
    <div className={styles["container"]}>
      <input
        placeholder="Search product"
        onChange={(event) => setFilter(event.target.value)}
        className={styles["input-text"]}
      />
      <SearchIcon />
    </div>
  );
};
