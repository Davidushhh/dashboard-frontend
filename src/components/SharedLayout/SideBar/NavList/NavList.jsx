import React, { useEffect, useState } from "react";
import List from "@mui/material/List";

import { NavColapse } from "../NavColapse/NavColapse";
import { NavNoColapse } from "../NavNoColapse/NavNoColapse";
import { useSelector } from "react-redux";

export const NavList = ({ open, setOpen, navRoutes, subMenu, mainNav }) => {
  const [currentNav, setCurrentNav] = useState("");
  const [currentSubNav, setCurrentSubNav] = useState([]);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const filtredSubMenu = subMenu?.filter((item) => {
      const access = item.access;
      if (!access || access.length === 0) return true;
      return access.includes(user?.position);
    });

    setCurrentSubNav(filtredSubMenu);
  }, [subMenu, user]);

  if (currentSubNav && currentSubNav.length > 0)
    return (
      <List
        ref={mainNav}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          // padding: "12px 0px 12px 20px",
        }}
      >
        {currentSubNav?.map(
          ({ id, color, menuTitle, type, icon, children, url, access }) =>
            type === "collapse" ? (
              <NavColapse
                key={id}
                id={id}
                title={menuTitle}
                icon={icon}
                color={color}
                navRoutes={navRoutes}
                sidebarOpen={open}
                setSidebarOpen={setOpen}
                children={children}
                currentNav={currentNav}
                url={url}
                setCurrentNav={setCurrentNav}
              />
            ) : (
              <NavNoColapse
                key={id}
                id={id}
                title={menuTitle}
                color={color}
                icon={icon}
                open={open}
                setOpen={setOpen}
                navRoutes={navRoutes}
                url={url}
                children={children}
                setCurrentNav={setCurrentNav}
              />
            )
        )}
      </List>
    );
};
