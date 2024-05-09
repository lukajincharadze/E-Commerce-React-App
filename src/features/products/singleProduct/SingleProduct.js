import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import { LoadingWrapper, Text } from "../../../components/header/atoms";
import { Stack, styled, Box, Rating } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typography from "@mui/material/Typography";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

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
        style={{
          width: "1000px",
          margin: "auto",
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
        }}
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
              {t("Parfume Name")}
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
              {t("Parfume Brand")}
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
              {t("Parfume Size")}
            </Text>
            <Text variant="h4" style={{ fontSize: "20px", marginLeft: "16px" }}>
              {description}
            </Text>
          </Description>
        </Box>
        <Box
          sx={{
            "& > legend": {
              mt: 2,
              fontSize: "25px",
              display: "flex",
              justifyContent: "center",
            },
          }}
        >
          <Typography
            component="legend"
            style={{ fontSize: "25px", marginTop: "40px" }}
          >
            {t("Rate this parfume:")}
          </Typography>
          <Rating
            name="customized-5"
            defaultValue={2}
            max={5}
            style={{ fontSize: "40px", marginTop: "5px", marginLeft: "210px" }}
          />
        </Box>
      </Stack>
      <Stack
        className="text-center text-white"
        style={{
          backgroundColor: "#f1f1f1",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Stack className="pt-4">
          <section className="mb-4">
            <FontAwesomeIcon
              icon={faFacebookF}
              size="lg"
              className="text-dark m-1"
              onClick={() => console.log("Facebook clicked")}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size="lg"
              className="text-dark m-1"
              onClick={() => console.log("Twitter clicked")}
            />
            <FontAwesomeIcon
              icon={faGoogle}
              size="lg"
              className="text-dark m-1"
              onClick={() => console.log("Google clicked")}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="lg"
              className="text-dark m-1"
              onClick={() => console.log("Instagram clicked")}
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              className="text-dark m-1"
              onClick={() => console.log("LinkedIn clicked")}
            />
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              className="text-dark m-1"
              onClick={() => console.log("GitHub clicked")}
            />
          </section>
        </Stack>

        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a
            className="text-dark"
            href="https://github.com/lukajincharadze"
            target="_blank"
          >
            {" "}
            Luka Jincharadze
          </a>
        </div>
      </Stack>
    </LoadingWrapper>
  );
};
