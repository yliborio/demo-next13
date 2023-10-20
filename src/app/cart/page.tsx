"use client";

import { CartItemCard } from "core/components/cart-item-card/cart-item-card";
import { ProductCard } from "core/components/product-card/product-card";
import { useCart } from "core/hooks/useCart/useCart";

export default async function Page() {
  const { cart } = useCart();
  const products = await Promise.all(
    cart.items.map(async (item) => {
      const data = await fetch(`https://fakestoreapi.com/products/${item.id}`);
      const product = await data.json();
      const quantity = item.quantity;
      return { product, quantity };
    })
  );

  return (
    <div>
      {products.map((p) => (
        <CartItemCard
          key={p.product.id}
          product={p.product}
          quantity={p.quantity}
        />
      ))}
      <div>Subtotal: {cart.total} </div>
    </div>
  );
}
