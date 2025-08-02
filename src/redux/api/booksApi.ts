// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => "book",
      providesTags: ["Book"],
    }),
    createBook: build.mutation({
      query: (data) => ({
        url: "/book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Book"],
    }),
     updateBook: build.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    // borrow

    getBook: build.query({
      query: (id) => `/book/${id}`,
      providesTags: ["Book"],
    }),
    borrowBook: build.mutation({
      query: ({ id, payload }) => ({
        url: `/borrow/${id}`,
        method: "POST",
        body: payload,
      }),
        invalidatesTags: ["Book"],
    }),
    borrowSummary: build.query({
      query: () => "/summary",
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useBorrowBookMutation,
  useBorrowSummaryQuery,
  useGetBookQuery,
} = booksApi;
