import { useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import { LOCALES_LIST, LOCALE_LABELS, Locales } from "@/locales/locales";
import { useCurrentLocale, useChangeLocale } from "@/locales/client";

const LanguageSelector = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <Box color="secondary.main" sx={{ display: "flex" }}>
      <Box sx={{ mt: "18px" }}>
        <LanguageIcon sx={{ fontSize: 20 }} />
      </Box>

      <Select
        defaultValue={currentLocale}
        label="Choose the language"
        onChange={(e) => {
          changeLocale(e.target.value as typeof currentLocale);
        }}
        sx={{
          color: "secondary.main",
          boxShadow: "none",
          "& .MuiSelect-root": {
            border: "none",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiSelect-placeholder": {
              color: "secondary.main",
            },
            "& .MuiSelect-value": {
              color: "secondary.main",
            },
          },
        }}
      >
        {LOCALES_LIST.map((locale: Locales) => (
          <MenuItem key={locale} value={locale}>
            {LOCALE_LABELS[locale]}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default LanguageSelector;
