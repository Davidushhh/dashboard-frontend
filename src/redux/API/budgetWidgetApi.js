import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const budgetWidgetApi = createApi({
  reducerPath: "budgetWidgetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openbudget.gov.ua/api/localBudgets/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getZakBudget: builder.query({
      query: () => "getBudgets?regionId=7",
    }),
  }),
});

export const { useGetZakBudgetQuery } = budgetWidgetApi;
