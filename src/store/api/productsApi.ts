import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '@/shared/types/types.ts';

type GetProductsParams = {
    category?: string;
    page?: number;
    perPage?: number;
    sortField?: string;
}

type ServerResponse = {
    data: Product[];
    first: number;
    items: number;
    last: number;
    next: number | null;
    pages: number;
    prev: number | null;
}

type TransformServerResponse = {
    data: Product[];
    firstPage: number;
    totalCount: number;
    lastPage: number;
    nextPage: number | null;
    totalPages: number;
    prevPage: number | null;
}


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
                const itemsArray: Product[] = Array.isArray(response.data) ? response.data : [];
                const firstPage = response.first;
                const totalCount = response.items;
                const lastPage = response.last;
                const nextPage = response.next;
                const totalPages = response.pages;
                const prevPage = response.prev;

                return {
                    data: itemsArray,
                    firstPage,
                    totalCount,
                    lastPage,
                    nextPage,
                    totalPages,
                    prevPage
                }
            }
        })
    })
})

export const {useGetCategoryQuery} = productsApi;