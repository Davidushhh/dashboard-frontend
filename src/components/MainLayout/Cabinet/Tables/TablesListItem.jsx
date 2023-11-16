import React, { useState } from "react";

import { Modal } from "components/Modal/Modal";
import FullFeaturedCrudGrid from "components/MainLayout/Cabinet/Tables/TableModal/TableModal";
import { useMediaQuery } from "@mui/material";
import * as SC from "components/MainLayout/Cabinet/Messages/MessageItem/MessageItem.styled";

import { dateTransformer } from "components/helpers";
import { Box } from "@mui/material";

const TablesListItem = ({ table }) => {
  const [showMessagesDetails, setShowMessagesDetails] = useState(false);

  const isMobileScreen = useMediaQuery("(max-width: 479px)");
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const onMessageClick = () => {
    setShowMessagesDetails(!showMessagesDetails);
  };

  return (
    <>
      <SC.MessagesItem
        style={{
          flexDirection: isMobileScreen ? "column" : "row",
          gap: isMobileScreen ? "12px" : "20px",
        }}
        onClick={onMessageClick}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <SC.MessagesDescription
            style={{
              fontSize: isSmallScreen ? "12px" : "14px",
              paddingBottom: "4px",
            }}
          >
            {isMobileScreen
              ? table.serviceName_cyrillic.substring(0, 30)
              : table.serviceName_cyrillic.substring(0, 50)}
          </SC.MessagesDescription>
          <SC.MessagesDescription
            style={{
              marginLeft: isMobileScreen ? 0 : "auto",
              fontSize: isSmallScreen ? "12px" : "14px",
            }}
          >
            {isSmallScreen
              ? dateTransformer(table.updateTime).substring(0, 10)
              : dateTransformer(table.updateTime)}
          </SC.MessagesDescription>
        </Box>
      </SC.MessagesItem>

      {showMessagesDetails && (
        <Modal onClose={onMessageClick}>
          <FullFeaturedCrudGrid table={table} />
        </Modal>
      )}
    </>
  );
};

export default TablesListItem;
