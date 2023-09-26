import apiSlices from "../api/apiSlice";

const usersApi = apiSlices.injectEndpoints({
  endpoints: (builder) => ({
    //user post api
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["Products"],
    }),

    //user put google login api
    googleLoginUser: builder.mutation({
      query: (userData) => ({
        url: "/googleUsers",
        method: "PUT",
        body: userData,
      }),
      // invalidatesTags: ["Products"],
    }),
  }),
});

export const { useAddUserMutation, useGoogleLoginUserMutation } = usersApi;