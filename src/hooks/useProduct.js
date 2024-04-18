import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const loading = useSelector((state) => state.product.loading);

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  return {
    loading,
    homePageProducts,
    selectedProduct,
  };
};
