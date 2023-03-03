import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "react-i18next";
import { lngs } from "../../helpers";
import { Colors } from "../../theme/colors";

export const ToggleLang = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleLang = (event: SelectChangeEvent) => {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box ml={1}>
      <Select
        value={lang}
        onChange={handleLang}
        displayEmpty
        inputProps={{ "aria-label": "Without label", "data-testid": "lang" }}
        sx={{ background: Colors.WHITE, border: "none" }}
      >
        {Object.keys(lngs).map((l) => (
          <MenuItem key={l} value={l}>
            {l}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
