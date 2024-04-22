import React from "react";
import { Card, Grid, styled, Stack } from "@mui/material";
import { Link, Text } from "../../../components/header/atoms";
import { ProductCardAction } from "./ProductCardAction";

const StyledImage = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "350px",
  borderRadius: 10,
}));

const StyledCard = styled(Card)(() => ({
  minWidth: "320px",
  height: 475,
  backgroundColor: "transparent",
  border: "none",
  padding: "24px",
  boxShadow: "none",
  "&:hover": {
    boxShadow: "0px 30px 100px rgba(0, 0 ,0, 0.05)",
    borderRadius: 20,
  },
}));

export const ProductCard = ({ product }) => {
  const { name, image, brand, category, price, _id } = product;
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <StyledCard>
        <Link to={`/products/categories/${category}/${_id}`}>
          <StyledImage src={image} alt={`${brand}-${name}`} />
        </Link>

        <Stack direction="row" justifyContent="space-between" mt="29px">
          <Stack spacing={1.5}>
            <Text color="#252B42" fontWeight="bold">
              {name}
            </Text>
            <Text color="#252B42">{brand}</Text>
            <Text color="#2e2e2e" fontWeight="bold">
              ${price}
            </Text>
          </Stack>
          <ProductCardAction product={product} />
        </Stack>
      </StyledCard>
    </Grid>
  );
};
