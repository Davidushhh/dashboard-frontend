import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import "components/MainLayout/Cabinet/Budget/BudgetWidget/open-budget-widget";

import * as SCofM from "components/MainLayout/Cabinet/Messages/Messages.styled";

import { Box } from "@mui/system";
import { BudgetFilters } from "./BudgetWidget/BudgetFilters/BudgetFilters";
import { useGetZakBudgetQuery } from "redux/API/budgetWidgetApi";

export default function BudgetLayout() {
  const [budgets, setBudgets] = useState([]);
  const [subject, setSubject] = useState("");
  const widgetsContainer = useRef(null);

  const { currentData } = useGetZakBudgetQuery();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (currentData && subject.length > 0) {
      const newBudgets = currentData.filter((budget) =>
        budget.budgetName.includes(subject)
      );
      setBudgets(newBudgets);
      console.log("newBudgets", newBudgets);
    }
  }, [currentData, subject]);

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
      <SCofM.MessagesContainer>
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <BudgetFilters user={user} setSubject={setSubject} />
          <Box ref={widgetsContainer}>
            {budgets.length > 0 &&
              budgets.map((budget) => (
                <open-budget-widget
                  key={budget.budgetId}
                  budget-id={budget.budgetId}
                  width="100%"
                  height="100%"
                  title-text={budget.budgetName}
                  background="white"
                  border="false"
                  border-style="2,#ссс"
                ></open-budget-widget>
              ))}
          </Box>
        </Box>
      </SCofM.MessagesContainer>
    </Box>
  );
}
