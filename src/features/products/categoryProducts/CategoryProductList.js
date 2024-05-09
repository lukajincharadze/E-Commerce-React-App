import React, { useEffect } from "react";
import { LoadingWrapper } from "../../../components/header/atoms";
import { Stack } from "@mui/material";
import { Sort } from "./Sort";
import { Paginate } from "./Paginate";
import { GridContainer } from "../components";
import { useProduct, useQueryParams } from "../../../hooks";
import { ProductCard } from "../components/ProductCard";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux/slices/productSlice";
import { useParams } from "react-router-dom";

export const CategoryProductList = () => {
  const { loading, categoryProducts, totalPages } = useProduct();
  const { category } = useParams();
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchCategoryProducts({
        category,
        queryUrl: `?size=3&sort=${sort},desc&page=${page}`,
      })
    );
  }, [sort, dispatch, page, category]);

  return (
    <LoadingWrapper isLoading={loading}>
      <Stack alignItems="center" justifyContent="space-between" height="100%">
        <Sort value={sort} changeSort={changeSort} />
        <GridContainer>
          {categoryProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
        <Paginate
          totalPages={totalPages}
          currentPage={page}
          changePage={changePage}
        />
      </Stack>
    </LoadingWrapper>
  );
};
