import React from "react";
import { styled, Box, CircularProgress } from "@mui/material";

const StyledLoadingContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));

export const Loading = ({ size = 100, color = "success" }) => {
  return (
    <StyledLoadingContainer>
      <CircularProgress color={color} size={size} />
    </StyledLoadingContainer>
  );
};

export const LoadingWrapper = ({ isLoading, children }) => {
  if (isLoading) return <Loading />;

  return children;
};
