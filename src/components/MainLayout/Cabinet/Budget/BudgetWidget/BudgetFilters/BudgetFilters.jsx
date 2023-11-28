import React, { useEffect } from "react";

import subjects from "components/helpers/subjectsList";
import { Box } from "@mui/material";

export const BudgetFilters = ({ user, setSubject }) => {
  console.log("user", user);
  useEffect(() => {
    if (!user) return;
    if (user.access === "oda") {
      setSubject("Закарпатської");
    }
    if (user.access === "district") {
      setSubject(subjects.translate[user.district]);
    }
    if (user.access === "hromada") {
      setSubject(user.hromada);
    }
  }, [setSubject, user]);
  return <Box></Box>;
};
