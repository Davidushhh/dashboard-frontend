import styled from "@emotion/styled";

import {
  Box,
  Tabs,
  Typography,
  Autocomplete,
  Switch,
  TextField,
} from "@mui/material";

export const BudgetFiltersWrapper = styled(Box)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (min-width: 768px) {
    padding: 32px;
    align-items: flex-start;
  }
`;

export const BudgetFiltersTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 500;
  color: #516696;
  line-height: 1.2;
  margin: 0;
  padding: 0;
`;
export const BudgetFiltersTabs = styled(Tabs)`
  .MuiTabs-flexContainer {
    flex-wrap: wrap;
  }

  .MuiTabs-indicator {
    background-color: rgba(81, 102, 150, 0.1);
    height: 100%;
    border-radius: 8px;
    border: 1px solid #516696;
  }

  .Mui-selected {
    color: #516696 !important;
  }

  .MuiButtonBase-root.MuiTab-root {
    @media (max-width: 400px) {
      font-size: 0.7rem;
      min-width: auto;
    }
  }
`;

export const BudgetFiltersAutocomplete = styled(Autocomplete)``;

export const AutocompleteTextField = styled(TextField)`
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #516696 !important;
  }

  .Mui-focused {
    color: #516696 !important;
  }
`;

export const BudgetFiltersSwitch = styled(Switch)`
  .Mui-checked {
    color: #516696 !important;
  }

  .Mui-checked + .MuiSwitch-track {
    background-color: #516696 !important;
  }
`;
