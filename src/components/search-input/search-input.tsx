import { SearchIcon } from "../icons/search-icon";
import styles from "./search-input.module.scss";

export const SearchInput = () => {
  return (
    <div className={styles["container"]}>
      <input placeholder="Search product" className={styles["input-text"]} />
      <SearchIcon />
    </div>
  );
};
