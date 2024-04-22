import React from "react";
import { Select, MenuItem, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledSelect = styled(Select)(() => ({
  border: "none",
  backgroundColor: "#f2f2f2",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 1px",
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
}));

export const Sort = ({ value, changeSort }) => {
  const { t } = useTranslation();

  return (
    <StyledSelect
      value={value || "price,desc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <MenuItem value="price,desc">{t("price: descending")}</MenuItem>
      <MenuItem value="price,asc">{t("price: ascending")}</MenuItem>
      <MenuItem value="name, desc">{t("name: descending")}</MenuItem>
      <MenuItem value="name, asc">{t("name: ascending")}</MenuItem>
    </StyledSelect>
  );
};
