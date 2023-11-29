import React, { useEffect, useState } from "react";
import * as SC from "./BudgetFilters.styled";

// import subjects from "components/helpers/subjectsList";
import { Box, Tab } from "@mui/material";

export const BudgetFilters = ({
  user,
  setSubject,
  budgets,
  defaultSubject,
}) => {
  const [subjectType, setSubjectType] = useState("Область");
  const [ACoptions, setACoptions] = useState([]);

  useEffect(() => {
    if (!budgets) return;
    if (subjectType === "Область") {
      const options = budgets
        .filter((budget) => budget.budgetName.includes("області"))
        .map((budget) => `${budget.budgetName} (${budget.budgetId})`);
      setACoptions(options);
    }
    if (subjectType === "Райони") {
      const options = budgets
        .filter((budget) => budget.budgetName.includes("району"))
        .map((budget) => `${budget.budgetName} (${budget.budgetId})`);
      setACoptions(options);
    }
    if (subjectType === "Громади") {
      const options = budgets
        .filter(
          (budget) =>
            budget.budgetName.includes("міста") ||
            budget.budgetName.includes("громади") ||
            budget.budgetName.includes("сільради")
        )
        .map((budget) => `${budget.budgetName} (${budget.budgetId})`);
      setACoptions(options);
    }
  }, [budgets, subjectType]);

  const handleChange = (event, newValue) => {
    setSubjectType(newValue);
  };

  const autocompleteHandler = (event, value) => {
    if (!value) {
      setSubject(defaultSubject);
      return;
    }
    value = value.replace(/\s\(.+\)$/, "");
    setSubject(value.trim());
  };

  return (
    <SC.BudgetFiltersWrapper>
      <Box sx={{ display: "flex", justifyContent: "flex-start", pb: "12px" }}>
        <SC.BudgetFiltersTitle>Пошук бюджетів</SC.BudgetFiltersTitle>
      </Box>
      <Box sx={{}}>
        <SC.BudgetFiltersTabs
          value={subjectType}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Область" value="Область" />
          <Tab label="Райони" value="Райони" />
          <Tab label="Громади" value="Громади" />
        </SC.BudgetFiltersTabs>
      </Box>
      <Box sx={{ width: "100%" }}>
        <SC.BudgetFiltersAutocomplete
          disablePortal
          id="subject-autocomplete"
          options={ACoptions}
          sx={{ maxWidth: { xs: "auto", lg: 400 }, width: "100%" }}
          renderInput={(params) => (
            <SC.AutocompleteTextField {...params} label="Пошук по назві" />
          )}
          onChange={autocompleteHandler}
        />
      </Box>
    </SC.BudgetFiltersWrapper>
  );
};
