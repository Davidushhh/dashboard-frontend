import styled from "@emotion/styled";

import { Box, Typography } from "@mui/material";

export const BoxWrapper = styled(Box)`
  padding: 32px;
`;

export const EmptyWidgetTitle = styled(Typography)`
  margin-bottom: 32px;

  font-size: 28px;
  font-weight: 700;

  color: #516696;
`;

export const EmptyWidgetsList = styled(Box)`
  padding: 16px;
  padding-left: 32px;
  display: flex;
  flex-direction: column;
  list-style: disc !important;

  gap: 16px;

  margin-bottom: 32px !important;
`;
export const EmptyWidgetItem = styled(Box)``;
export const EmptyWidgetItemTitle = styled(Typography)`
  font-size: 18px;

  color: #516696;
`;

export const InfoText = styled(Box)`
  font-size: 18px;

  color: #516696;
`;
