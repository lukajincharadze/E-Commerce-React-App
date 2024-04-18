import React from "react";
import { useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers/utils";
import { styled, Fab, Stack } from "@mui/material";
import { Button, Text } from "../../../components/atoms";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  setSelectedProduct,
} from "../../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

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

  if (isUserAdmin(userData))
    return (
      <Stack>
        <Button
          onClick={() => {
            dispatch(setSelectedProduct(product));
            navigate(`/products/${product._id}/edit`);
          }}
        >
          Edit
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteProduct({ id: product._id }));
          }}
        >
          Delete
        </Button>
      </Stack>
    );

  return (
    <StyledFab variant="extended">
      <FaPlus color="white" style={{ marginRight: 4 }} />
      <Text color="#fff">Add to cart</Text>
    </StyledFab>
  );
};
