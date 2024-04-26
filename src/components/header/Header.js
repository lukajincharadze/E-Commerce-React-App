import React, { useState } from "react";
import { styled, Appbar, Toolbar, Box, AppBar, Badge } from "@mui/material";
import { Button, Link } from "./atoms";
import { Searchbar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";
import { CartModal } from "./CartModal";
import { BsCart4, BsSearch } from "react-icons/bs";
import { useCart } from "../../hooks";
import { ProductCategories } from "./ProductCategories";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#ffcdbd",
  padding: "0 37px 0 30px",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 8,
  paddingBottom: 8,
}));

export const Header = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
  const { cartItems } = useCart();
  const isMobileView = useMediaQuery("(max-width: 800px)");

  const cartItemsQuantity = cartItems?.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link style={{ color: "black" }} to="/">
            {t("home")}
          </Link>
          {!isMobileView && <Searchbar />}
          {isMobileView && (
            <Button
              onClick={() => {
                setIsSearchBarExpanded((prev) => !prev);
              }}
            >
              <BsSearch
                color="#CD5050"
                size={25}
                style={{ marginLeft: "10" }}
              />
            </Button>
          )}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              onClick={() => {
                setOpen(true);
              }}
              disabled={cartItems.length === 0}
            >
              <Badge badgeContent={cartItemsQuantity} color="primary">
                <BsCart4 size={30} color="#CD5050" />
              </Badge>
            </Button>
            <UserIcon />
            <LanguageSelect />
          </Box>
        </StyledToolbar>
        {isMobileView && isSearchBarExpanded && <Searchbar width="100%" />}
        <ProductCategories />
        <CartModal
          open={open}
          setOpen={setOpen}
          cartItems={cartItems}
          totalQuantity={cartItemsQuantity}
        />
      </StyledAppBar>
    </Box>
  );
};
