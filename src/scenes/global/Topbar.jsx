import { useContext } from "react";

import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { TbCurrencyDollarCanadian } from "react-icons/tb";
import { IoLogoUsd } from "react-icons/io";

//Color Theme
import { ColorModeContext, tokens } from "../../theme";

const Topbar = ({ setCurrencyEx, currency }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="end" p={2}>
      <Box display="flex">
        <IconButton onClick={colorMode.toggoleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton onClick={() => setCurrencyEx(currency.CAD)}>
          <TbCurrencyDollarCanadian />
        </IconButton>
        <IconButton onClick={() => setCurrencyEx(currency.USD)}>
          <IoLogoUsd />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
