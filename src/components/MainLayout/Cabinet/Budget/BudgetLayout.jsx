import React, { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { metricaPages, metricaPagesCabinet } from "pagesConfig";

import { useSelector } from "react-redux";
import "components/MainLayout/Cabinet/Budget/BudgetWidget/open-budget-widget";
import subjects from "components/helpers/subjectsList";

import { MessagesContainer } from "components/MainLayout/Cabinet/Messages/Messages.styled";
import * as SC from "./BudgetLayout.styled";

import { Box } from "@mui/system";
import { BudgetFilters } from "./BudgetWidget/BudgetFilters/BudgetFilters";
import { useGetZakBudgetQuery } from "redux/API/budgetWidgetApi";
import { EmptyBudgetsInfoBox } from "./EmptyBudgetsInfoBox/EmptyBudgetsInfoBox";
import { selectPerson } from "redux/person/personSlice";

export default function BudgetLayout() {
  const [setSubMenu] = useOutletContext();

  const [defaultSubject, setDefaultSubject] = useState("");
  const [budgets, setBudgets] = useState([]);
  const [subject, setSubject] = useState("");
  const budgetWidgetWrapper = useRef();
  const person = useSelector(selectPerson);
  const { currentData } = useGetZakBudgetQuery();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!setSubMenu) return;
    if (person === "cabinet") {
      setSubMenu(metricaPagesCabinet);
    } else {
      setSubMenu(metricaPages);
    }
  }, [person, setSubMenu]);

  useEffect(() => {
    if (currentData && subject.length > 0) {
      const newBudgets = currentData.filter((budget) =>
        budget.budgetName.includes(subject)
      );
      setBudgets(newBudgets);
    }
  }, [currentData, subject]);
  useEffect(() => {
    if (!user) {
      setSubject("Закарпатської");
      setDefaultSubject("Закарпатської");
      return;
    }
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
      <MessagesContainer>
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
          <SC.BudgetWidgetWrapper ref={budgetWidgetWrapper}>
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
          <EmptyBudgetsInfoBox widgetWrapper={budgetWidgetWrapper} />
        </Box>
      </MessagesContainer>
    </Box>
  );
}
