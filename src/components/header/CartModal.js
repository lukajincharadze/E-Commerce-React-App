import React from "react";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Box, Stack, styled, Divider, Chip } from "@mui/material";
import { Button, Text } from "./atoms";
import { IoIosClose } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart, addToCart, removeProductFromCart } from "../../redux";
import { useTranslation } from "react-i18next";

const containerStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  paddingX: 2,
  paddingY: 2,
};

const StyledButton = styled(Button)(() => ({
  cursor: "pointer",
  padding: 0,
  minHeight: 0,
  minWidth: 0,
  width: "29px",
  outline: "none",
  "&:focus": {
    outline: "none",
  },
}));

export const CartModal = ({ open, setOpen, cartItems, totalQuantity }) => {
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();

  const totalSum = cartItems.reduce(
    (acc, curr) => acc + curr.product.price * curr.quantity,
    0
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 1500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={containerStyles}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text variant="h6" fontWeight="medium">
                {totalQuantity} {t("parfumes in cart")}
              </Text>
              <Button onClick={handleClose}>
                <IoIosClose size={30} />
              </Button>
            </Stack>
            <Divider sx={{ mt: 1, mb: 2 }} />
            {cartItems.map((item) => {
              return (
                <ShoppingCartItem
                  key={item.product._id}
                  product={item.product}
                  quantity={item.quantity}
                />
              );
            })}
            <Stack direction="row" justifyContent="space-between">
              <Text fontWeight="bold">{t("Total")}</Text>
              <Text fontWeight="bold">${totalSum}</Text>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

const ShoppingCartItem = ({ product, quantity }) => {
  const { _id, name, price, image } = product;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Box>
      <Stack direction="row">
        <img
          src={image}
          style={{ width: 120, height: 120, borderRadius: 5 }}
          alt=""
        />
        <Stack spacing={2} width="100%" padding={1.5}>
          <Stack direction="row" justifyContent="space-between">
            <Text fontWeight="400">{name}</Text>
            <Text fontWeight="400" sx={{ marginRight: 1 }}>
              ${price.toFixed(2)}
            </Text>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Chip
                label={t("in stock")}
                color="success"
                sx={{ borderRadius: 1.5, width: 80, height: 30 }}
              />
              <Stack
                direction="row"
                alignItems={"center"}
                onClick={() => dispatch(removeProductFromCart(_id))}
              >
                <FaTrashAlt size={15} />
                <Text>{t("Remove")}</Text>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0}
              sx={{
                border: "1px solid #00BFFF",
                borderRadius: "30px",
              }}
            >
              <StyledButton
                onClick={() => {
                  dispatch(removeFromCart(_id));
                }}
              >
                -
              </StyledButton>
              <Text>{quantity}</Text>
              <StyledButton
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                +
              </StyledButton>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider sx={{ mt: 3, mb: 3 }} />
    </Box>
  );
};
