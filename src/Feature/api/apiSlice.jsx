import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlices = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) =>({}),
});
export default apiSlices;
  // product sundor vabe hangle kora jonno ai tag gula use hy ,akadik tag use hote pare
  


