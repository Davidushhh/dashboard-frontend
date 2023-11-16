import React from "react";

import { useParams } from "react-router-dom";

import Messages from "./Messages/Messages";
import Solicitations from "./Solicitations/Solicitations";
import Petitions from "./Petitions/Petitions";
import { Box } from "@mui/material";

export const CabinetLayout = () => {
  const { sub } = useParams();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        gap: "20px",
      }}
    >
      {sub === "e-appeal" && <Messages />}
      {sub === "solicitations" && <Solicitations />}
      {sub === "petitions" && <Petitions />}
    </Box>
  );
};

export default CabinetLayout;
