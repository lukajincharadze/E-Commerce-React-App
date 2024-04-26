import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Autocomplete,
  InputAdornment,
  Stack,
  TextField,
  styled,
} from "@mui/material";
import { Link, Loading, Text } from "../header/atoms";
import { BsSearch } from "react-icons/bs";
import { useDebounce, useFetchData } from "../../hooks";

const StyledImage = styled("img")(() => ({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: 3,
}));

export const Searchbar = ({ width }) => {
  const [searchValue, setSearchValue] = useState("");
  const { t } = useTranslation();
  const [debouncedSearch] = useDebounce(500, searchValue);
  const { getData, loading, data, setState } = useFetchData();

  useEffect(() => {
    if (debouncedSearch) {
      getData(`/products/search?name=${debouncedSearch}`);
    } else {
      setState((prev) => ({ ...prev, data: null }));
    }
  }, [debouncedSearch, getData, setState]);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      sx={{
        width: width || "500px",
        ".MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderRadius: 5,
          borderColor: "#0A3251",
          height: "35px",
          paddingTop: "-10px",
          paddingBottom: "20px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "#0A3251",
          },
      }}
      loading={loading}
      loadingText={<Loading size={50} />}
      options={data?.products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { image, category, name, _id, price } = option;
        return (
          <Link to={`/products/categories/${category}/${_id}`}>
            <Stack direction="row" ml={1} mb={1}>
              <StyledImage src={image} alt={`${category}-${name}`} />
              <Text>{name}</Text>
              <Text sx={{ marginLeft: "10" }}>{price}</Text>
            </Stack>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            placeholder={t("Search")}
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position="start">
                  {/* x={{ paddingBottom: "17px" } */}
                  <BsSearch color="#CD5050" size={20} />
                </InputAdornment>
              ),
            }}
            sx={{
              input: { color: "#0A3251" },
            }}
            InputLabelProps={{
              style: { color: "#0A3251" },
            }}
          />
        );
      }}
    />
  );
};
