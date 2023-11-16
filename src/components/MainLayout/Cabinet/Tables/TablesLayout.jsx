import React, { useEffect, useState } from "react";

import { useGetTablesQuery } from "redux/API/cabinetApi";
import { RefreshBtn } from "components/MainLayout/RefreshBtn";
import { LayoutToolbar } from "components/MainLayout/LayoutToolbar/LayoutToolbar";
import * as SCofM from "components/MainLayout/Cabinet/Messages/Messages.styled";
import TablesListItem from "components/MainLayout/Cabinet/Tables/TablesListItem";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const TablesLayout = () => {
  const [tables, setTables] = useState([]);
  // const [page, setPage] = useState(0);

  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const { currentData, isFetching, refetch } = useGetTablesQuery();

  useEffect(() => {
    if (currentData) {
      let newData = [...currentData.data];
      // newData.sort(compareCreatedAt);

      setTables(newData);
    }
  }, [currentData]);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <LayoutToolbar>
        <RefreshBtn onClick={refetch} isFetching={isFetching} />
      </LayoutToolbar>

      <SCofM.MessagesContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px",
            borderBottom: "3px solid #000",
            width: "100%",
            paddingBottom: "10px",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "16px", fontWeight: 600 }}>
            Доступні таблиці
          </Typography>
        </Box>
        <SCofM.MessagesList>
          {tables &&
            tables.map((item) => (
              <TablesListItem key={item.tableName} table={item} />
            ))}
        </SCofM.MessagesList>
      </SCofM.MessagesContainer>
    </Box>
  );
};

export default TablesLayout;
