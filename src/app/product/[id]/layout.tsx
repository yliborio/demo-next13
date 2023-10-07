import { ReactElement } from "react";
import styles from "./layout.module.scss";

export const Layout = (props: { children: ReactElement[] }) => {
  return <div className={styles["container"]}>{props.children}</div>;
};

export default Layout;
