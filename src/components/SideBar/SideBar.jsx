import * as React from "react";
import { useParams } from "react-router-dom";
import { NavList } from "./NavList/NavList";
import { Box } from "@mui/material";

import * as SC from "./SideBar.styled";

export default function MiniDrawer({ open, setOpen, subMenu }) {
  const params = useParams();

  return (
    <SC.Drawer
      variant="permanent"
      open={open}
      sx={{ paddingTop: { sm: "86px", lg: "0px" } }}
    >
      <Box></Box>
      <NavList
        open={open}
        setOpen={setOpen}
        navRoutes={params}
        subMenu={subMenu}
      />
    </SC.Drawer>
  );
}
