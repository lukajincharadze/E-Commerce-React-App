import React from "react";
import { Pagination } from "@mui/material";

export const Paginate = ({ totalPages, currentPage, changePage }) => {
  return (
    <Pagination
      color="primary"
      count={totalPages}
      page={Number(currentPage)}
      onChange={(_, value) => {
        changePage("page", value);
      }}
    />
  );
};
