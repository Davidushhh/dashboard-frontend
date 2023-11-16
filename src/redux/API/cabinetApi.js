import { api } from "./API";

export const cabinetApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserMsg: builder.query({
      query: ({ page, limit }) => ({
        url: `/profile/messages/get-messages?page=${page}&limit=${limit}`,
      }),
    }),
    sendAnswer: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/profile/messages/answer-message`,
          method: "POST",
          body: data,
        };
      },
    }),
    getTables: builder.query({
      query: () => ({
        url: `/profile/tables/get-tables`,
      }),
    }),
    getTable: builder.query({
      query: (name) => ({
        url: `/profile/tables/get-table/${name}`,
      }),
    }),
    updateTableRow: builder.mutation({
      query: ({ tableName, id, data }) => ({
        url: `/profile/tables/${tableName}`,
        method: "PATCH",
        body: { id, data },
      }),
    }),
  }),
});

export const {
  useGetUserMsgQuery,
  useSendAnswerMutation,
  useGetTablesQuery,
  useGetTableQuery,
  useUpdateTableRowMutation,
} = cabinetApi;
