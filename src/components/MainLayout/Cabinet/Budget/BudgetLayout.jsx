import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "components/MainLayout/Cabinet/Budget/BudgetWidget/open-budget-widget";
import subjects from "components/helpers/subjectsList";

import * as SCofM from "components/MainLayout/Cabinet/Messages/Messages.styled";
import * as SC from "./BudgetLayout.styled";

import { Box } from "@mui/system";
import { BudgetFilters } from "./BudgetWidget/BudgetFilters/BudgetFilters";
import { useGetZakBudgetQuery } from "redux/API/budgetWidgetApi";

export default function BudgetLayout() {
  const [defaultSubject, setDefaultSubject] = useState("");
  const [budgets, setBudgets] = useState([]);
  const [subject, setSubject] = useState("");

  const { currentData } = useGetZakBudgetQuery();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (currentData && subject.length > 0) {
      const newBudgets = currentData.filter((budget) =>
        budget.budgetName.includes(subject)
      );
      setBudgets(newBudgets);
    }
  }, [currentData, subject]);

  useEffect(() => {
    if (!user) return;

    const url = window.location.href;

    if (user.access === "oda" || !url.includes("/cabinet")) {
      setSubject("Закарпатської");
      setDefaultSubject("Закарпатської");
      return;
    }
    if (user.access === "district") {
      setSubject(subjects.translate[user.district]);
      setDefaultSubject(subjects.translate[user.district]);
      return;
    }
    if (user.access === "hromada") {
      setSubject(subjects.translate[user.hromada]);
      setDefaultSubject(subjects.translate[user.hromada]);
      return;
    }
  }, [setDefaultSubject, setSubject, user]);

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
          <BudgetFilters
            user={user}
            setSubject={setSubject}
            budgets={currentData}
            defaultSubject={defaultSubject}
          />
          <SC.BudgetWidgetWrapper>
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
          </SC.BudgetWidgetWrapper>
        </Box>
      </SCofM.MessagesContainer>
    </Box>
  );
}
