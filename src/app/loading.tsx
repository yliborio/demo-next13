import Skeleton from "react-loading-skeleton";

export default async function Loading() {
  return (
    <div>
      <Skeleton count={5} />
    </div>
  );
}
