import React from "react";
import { styled, Appbar, Toolbar, Box, AppBar } from "@mui/material";
import { Link } from "../atoms";
import { Searchbar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import { LanguageSelect } from "./LanguageSelect";
import { useTranslation } from "react-i18next";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#131921",
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
  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <Link style={{ color: "white" }}>{t("home")}</Link>
          <Searchbar />
          <UserIcon />
          <LanguageSelect />
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
};
