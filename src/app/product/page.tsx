"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    router.push(`/product/${inputValue}`);
  };

  return (
    <div>
      <span>Search by product id</span>
      <input id="product-id" onChange={handleChange} placeholder="Product ID" />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
