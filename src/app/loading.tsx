import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./loading.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export default async function Loading() {
  return (
    <SkeletonTheme baseColor="darkgrey" height={"350px"}>
      <div className={styles["container"]}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </SkeletonTheme>
  );
}
