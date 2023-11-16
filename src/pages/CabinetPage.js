import React, { useEffect } from "react";

import { useOutletContext } from "react-router-dom";
import { cabinetPages } from "pagesConfig";

import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";

const CabinetPage = () => {
  const [setSubMenu] = useOutletContext();

  useEffect(() => {
    setSubMenu(cabinetPages);
  }, [setSubMenu]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default CabinetPage;
