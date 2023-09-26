import apiSlices from "../api/apiSlice";
// import { resetSearchQuery } from "./ProductSlice";


const productsApi = apiSlices.injectEndpoints({
  //   tagTypes: ["Products"],

  endpoints: (builder) => ({
    // category get korar api
    getCategory: builder.query({
      query: () => ({
        url: "/allCategory",
      }),
      //   providesTags: ["Products"],
    }),
    // allProducts get korar api
    categoryByProducts: builder.query({
      query: (categoryText) => ({
        url: `/singleCategoryData/${categoryText}`,
      }),
      //   providesTags: ["Products"],
      // async onQueryStarted(
      //   arg,
      //   {
      //     dispatch,
      //     getState,
      //     extra,
      //     requestId,
      //     queryFulfilled,
      //     getCacheEntry,
      //     updateCachedData,
      //   }
      // ) {
      //   dispatch(resetSearchQuery());
      // },
    }),
    // allProducts get korar api
    getAllProducts: builder.query({
      query: () => ({
        url: "/allProductData",
      }),
      //   providesTags: ["Products"],
    }),

    // search data query get korar api
    searchByProducts: builder.query({
      query: ({ location, adults, children, dateTimeSet }) => ({
        
        url: `searchData/?location=${location}&adults=${adults}&children=${children}&dateTimeSet=${dateTimeSet}`,
      }),
      //   providesTags: ["Products"],
      // async onQueryStarted(
      //   arg,
      //   {
      //     dispatch,
      //     getState,
      //     extra,
      //     requestId,
      //     queryFulfilled,
      //     getCacheEntry,
      //     updateCachedData,
      //   }
      // ) {
      //   console.log(arg);
      // },
    }),

    // product add/post korar api
    // addProduct: builder.mutation({
    //     query: (data) => ({
    //         url: "/product",
    //         method: "POST",
    //         body: data
    //     }),
    //     invalidatesTags: ["Products"],
    // }),

    // product delete korar api
    // removeProduct: builder.mutation({
    //     query: (id) => ({
    //         url: `/product/${id}`,
    //         method: "DELETE",
    //     }),
    //     invalidatesTags: ["Products"]
    // }),

    //users post data
  }),
});

export const { useGetCategoryQuery, useCategoryByProductsQuery, useGetAllProductsQuery, useSearchByProductsQuery } = productsApi;
