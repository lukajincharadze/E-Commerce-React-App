import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const loading = useSelector((state) => state.product.loading);

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const productCategories = useSelector(
    (state) => state.product.productCategories
  );

  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );

  const totalPages = useSelector((state) => state.product.totalPages);

  return {
    loading,
    homePageProducts,
    categoryProducts,
    productCategories,
    selectedProduct,
    totalPages,
  };
};
