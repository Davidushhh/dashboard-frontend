import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export const TablesModal = styled(Box)((props) => ({
  padding: "36px",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",

  margin: "0 32px",
  backgroundColor: "#fff",
  borderRadius: "8px",
}));

export const TableGrid = styled(DataGrid)((props) => ({
  width: "100%",
}));

export const TableTitle = styled(Typography)((props) => ({
  textAlign: "center",
}));

export const ExportButton = styled(Button)((props) => ({
  padding: "6px 12px",
  marginRight: "auto",
}));
