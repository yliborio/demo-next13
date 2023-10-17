import Link from "next/link";
import styles from "./layout.module.scss";
import { BackIcon } from "core/components/icons/back-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles["container"]}>
      <Link className={styles["back"]} href={"/"}>
        <BackIcon />
      </Link>
      {children}
    </div>
  );
}
