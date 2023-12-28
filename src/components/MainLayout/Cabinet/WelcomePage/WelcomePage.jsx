import React from "react";

import { Box } from "@mui/material";
import { MessageBox } from "components/MainLayout/MessageBox";

export const WelcomePage = () => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flex: 1,
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <MessageBox text={"Вітаємо вас у системі!"} />
    </Box>
  );
};
