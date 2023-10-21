import React from "react";
import { render, screen } from "@testing-library/react";
import Loading from "./loading"; // Replace with the correct path to your component

test("Loading component renders the expected number of Skeletons", () => {
  render(<Loading />);

  // Check if the Skeleton components are rendered
  const skeletonElements = screen.getByTestId("loading-skeletons");

  // Assuming that you have 9 Skeleton components in your component
  expect(skeletonElements.children).toHaveLength(9);
});
