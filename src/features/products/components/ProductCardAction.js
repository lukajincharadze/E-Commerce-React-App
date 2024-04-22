import React from "react";
import { useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers/utils";
import { styled, Fab, Stack } from "@mui/material";
import { Button, Text } from "../../../components/header/atoms";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";

const StyledFab = styled(Fab)(() => ({
  backgroundColor: "black",
  "&:hover": {
    backgroundColor: "black",
  },
}));

export const ProductCardAction = ({ product }) => {
  const { userData } = useUser(product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  if (isUserAdmin(userData))
    return (
      <Stack>
        <Button
          onClick={() => {
            dispatch(setSelectedProduct(product));
            navigate(`/products/${product._id}/edit`);
          }}
        >
          {t("Edit")}
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteProduct({ id: product._id }));
          }}
        >
          {t("Delete")}
        </Button>
      </Stack>
    );

  return (
    <StyledFab
      variant="extended"
      onClick={() => {
        dispatch(addToCart(product));
      }}
    >
      <FaPlus color="white" style={{ marginRight: 4 }} />
      <Text color="#fff">{t("Add to cart")}</Text>
    </StyledFab>
  );
};
