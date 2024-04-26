import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import { LoadingWrapper, Text } from "../../../components/header/atoms";
import { Stack, styled, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "350px",
  objectFit: "cover",
  borderRadius: 10,
}));

const Description = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "15px",
}));

export const SingleProduct = () => {
  const { t } = useTranslation();
  const { id, category } = useParams();
  const { getData, data, loading } = useFetchData();

  useEffect(() => {
    getData(`/products/category/${category}/${id}`);
  }, [getData, id, category]);

  const { image, name, brand, description } = data?.product || {};

  return (
    <LoadingWrapper isLoading={loading}>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        style={{ width: "1000px", margin: "auto", marginTop: "100px" }}
      >
        <Box
          style={{
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "8px",
            background: "#FFF",
            boxShadow: "0px 5px 20px 13px rgba(1, 0, 0, 0.1)",
          }}
        >
          <StyledImage
            src={image}
            alt={`${name}-${brand}`}
            style={{
              borderRadius: "8px",
              display: "block",
              margin: "auto",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          />
          <Description>
            <Text
              variant="h4"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "8px",
              }}
            >
              {t("Product Name")}
            </Text>
            <Text variant="h4" style={{ fontSize: "20px", marginLeft: "16px" }}>
              {name}
            </Text>
          </Description>
          <Description>
            <Text
              variant="h4"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "8px",
              }}
            >
              {t("Product Brand")}
            </Text>
            <Text variant="h4" style={{ fontSize: "20px", marginLeft: "16px" }}>
              {brand}
            </Text>
          </Description>
          <Description>
            <Text
              variant="h4"
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "8px",
              }}
            >
              {t("Product Description")}
            </Text>
            <Text variant="h4" style={{ fontSize: "20px", marginLeft: "16px" }}>
              {description}
            </Text>
          </Description>
        </Box>
      </Stack>
    </LoadingWrapper>
  );
};
