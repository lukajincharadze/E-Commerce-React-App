import React from "react";
import { Home } from "../features/products/home";
import { Link } from "../components/atoms";

export const HomePage = () => {
  return (
    <>
      <Link to="/products/add">Add Product</Link>
      <Home />
    </>
  );
};
