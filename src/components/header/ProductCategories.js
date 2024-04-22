import React from "react";
import { List, ListItem, styled } from "@mui/material";
import { useProduct } from "../../hooks";
import { Link, Text } from "../header/atoms";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "0px",
}));

export const ProductCategories = () => {
  const { productCategories } = useProduct();
  return (
    <List sx={{ display: "flex" }}>
      {productCategories.map((category) => {
        const { _id, name } = category;
        return (
          <Link
            key={_id}
            to={`/products/categories/${name}?sort=price,desc&page=1`}
          >
            <StyledListItem>
              <Text color="#00FFC4">{name}</Text>
            </StyledListItem>
          </Link>
        );
      })}
    </List>
  );
};
