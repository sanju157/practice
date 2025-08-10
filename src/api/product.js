import api from "@api/api";

const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
          query: () => 'products',
        }),
        getProductByID: build.query({
            query: (id) => ({url: `products/${id}`}),
        }),
        getProductCategory: build.query({
          query: (id) => ({url: `products/categories`}),
        }),
        createProduct: build.mutation({
          query: (data) => ({
            url: `products`,
            method: 'post',
            body: data,
          })
        }),
        updateProduct: build.mutation({
          query: (id, data) => ({
            url: `products/${id}`,
            method: 'put',
            body: data,
          })
        }),
        deleteProduct: build.mutation({
          query: (id) => ({
            url: `products/${id}`,
            method: 'delete'
          })
        })
    }),
    overrideExisting: false,
})

export const { 
  useGetProductsQuery,  
  useGetProductByIDQuery, 
  useGetProductCategoryQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productApi