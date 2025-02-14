import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000",
  prepareHeaders(headers, { getState }) {
    const authenticationToken = getState().authentication.userInformation;
    if (authenticationToken)
      headers.set("Authorization", `Bearer ${authenticationToken.token}`);
    headers.set("Content-type", "application/json");

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Notification"],
  endpoints: (_) => ({}),
});
