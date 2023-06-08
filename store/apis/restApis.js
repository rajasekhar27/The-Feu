import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = process.env.NEXT_APP_BACKEND_BASEURL;.

// const baseUrl = "https://f786-2401-4900-1c0e-8fff-00-1c8-8dea.ngrok-free.app/";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASEURL;

const accountClient = process.env.NEXT_PUBLIC_ACCOUNTS_CLIENT_URL;

const restApi = createApi({
  reducerPath: "restApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.auth?.accessToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: [],

  endpoints: (builder) => ({
    //add contact us user details
    addContactDetails: builder.mutation({
      query: (data) => ({
        url: `${accountClient}contact-us/`,
        method: "POST",
        body: data,
      }),
    }),

    //add book a table contact details

    addBookATableContact: builder.mutation({
      query: (data) => ({
        url: `${accountClient}book-table/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddContactDetailsMutation, useAddBookATableContactMutation } =
  restApi;

export default restApi;
