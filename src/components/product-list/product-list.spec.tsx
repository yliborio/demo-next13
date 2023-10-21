import React from "react";
import { render, screen } from "@testing-library/react";
import { ProductList } from "./product-list"; // Import your ProductList component
import { FakeAPIProduct } from "core/types/product";

describe("ProductList", () => {
  it("displays a list of products correctly", () => {
    const products: FakeAPIProduct[] = [
      {
        id: 1,
        title: "Product 1",
        price: 19.99,
        image: "/sample-image-test",
        rating: {
          rate: 4,
          count: 4,
        },
      } as any,
      {
        id: 2,
        title: "Product 2",
        price: 24.99,
        image: "/sample-image-test",
        rating: {
          rate: 4,
          count: 4,
        },
      },
    ];

    const { asFragment } = render(<ProductList products={products} />);
    expect(asFragment()).toMatchSnapshot();

    expect(screen.getByText("Product 1 - 4/5 (4)")).toBeInTheDocument();
    expect(screen.getByText("Product 2 - 4/5 (4)")).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(products.length);
  });

  it('displays a "No products found" message when no products are available', () => {
    const products: FakeAPIProduct[] = [];

    render(<ProductList products={products} />);
    expect(screen.getByText("No products found :(")).toBeInTheDocument();
  });
});
