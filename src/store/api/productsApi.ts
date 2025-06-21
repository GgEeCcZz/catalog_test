import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GetProductsParams, ServerResponse, TransformServerResponse } from '@/shared/types/types.ts';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3005/'}),
    endpoints: (builder) => ({
        getCategory: builder.query<TransformServerResponse, GetProductsParams>({
            query: ({ category, page = 1, perPage = 9, sortField }) => {
                const params = new URLSearchParams();
                if (category) params.append('category', category);
                params.append('_page', String(page));
                params.append('_per_page', String(perPage));
                if (sortField) {
                    params.append('_sort', sortField);
                }
                return {
                    url: `product?${params.toString()}`,
                };
            },
            transformResponse: (response: ServerResponse) => {
                return {
                    data: Array.isArray(response.data) ? response.data : [],
                    firstPage: response.first,
                    totalCount: response.items,
                    lastPage: response.last,
                    nextPage: response.next,
                    totalPages: response.pages,
                    prevPage: response.prev
                }
            }
        })
    })
})

export const {useGetCategoryQuery} = productsApi;