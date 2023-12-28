import React, { useEffect } from "react";

import { useOutletContext } from "react-router-dom";
import { cabinetPages } from "pagesConfig";

import { Box } from "@mui/material";

import { Outlet, useParams } from "react-router-dom";
import { WelcomePage } from "components/MainLayout/Cabinet/WelcomePage/WelcomePage";

const CabinetPage = () => {
  const [setSubMenu] = useOutletContext();
  const params = useParams();

  useEffect(() => {
    setSubMenu(cabinetPages);
  }, [setSubMenu]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        flex: 1,
      }}
    >
      {Object.keys(params).length === 0 ? (
        <WelcomePage />
      ) : (
        <Outlet context={[]} />
      )}
    </Box>
  );
};

export default CabinetPage;
