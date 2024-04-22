import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

const languageCodes = {
  en: "English",
  ka: "Georgian",
};

export const LanguageSelect = () => {
  const [langCode, setLangCode] = useState(
    () => localStorage.getItem("langCode") || "en"
  );

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("langCode", langCode);
  }, [i18n, langCode]);

  return (
    <FormControl sx={{ minWidth: 120, m: 1 }}>
      <Select
        sx={{ color: "lime", border: "2px solid blue" }}
        value={langCode}
        onChange={(e) => {
          setLangCode(e.target.value);
        }}
        defaultValue={langCode}
      >
        {Object.entries(languageCodes).map((item) => {
          const [languageKey, languageValue] = item;
          return (
            <MenuItem key={languageKey} value={languageKey}>
              {languageValue}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
