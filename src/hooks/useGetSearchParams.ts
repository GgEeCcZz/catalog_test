import { useSearchParams } from 'react-router-dom';
import { useGetCategoryQuery } from '@/store/api/productsApi.ts';
import type { Product } from '@/shared/types/types.ts';

export const useGetSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam: string | undefined = searchParams.get('category') || undefined;
    const pageParam: number = Number(searchParams.get('page') || '1');
    const sortField: string | undefined = searchParams.get('sort') || undefined;
    const PAGE_SIZE: number = 15;


    const {data, isLoading, error} = useGetCategoryQuery({
        category: categoryParam,
        page: pageParam,
        perPage: PAGE_SIZE,
        sortField: sortField,
    });
    console.log('data', data)

    const productArray: Product[] = data?.data || []; // массив товаров

    // пагинация
    const totalCount = data?.totalCount || 0;
    const totalPages: number = typeof data?.totalPages === 'number' ? data?.totalPages : Math.ceil(totalCount / PAGE_SIZE);

    // смена категории через левое боковое меню
    const handleCategoryChange = (newCategory: string): void => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('category', newCategory);
        newParams.delete('sort');
        newParams.delete('order');
        newParams.set('page', '1');
        setSearchParams(newParams);
    };

    // сортировка по 3 параметрам: цена, название, тип товара

    const handleProductSort = (sortFieldName: string): void => {
        const newParams = new URLSearchParams(searchParams);

        if (sortField === sortFieldName) {
            newParams.set('sort', `-${sortFieldName}`); // name price type
        } else if (sortField === `-${sortFieldName}`) {
            newParams.delete('sort')
        } else {
            newParams.set('sort', sortFieldName)
        }

        newParams.set('page', '1');
        setSearchParams(newParams);
    }

    // пагинация

    const handlePageChange = (newPage: number): void => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', newPage.toString());
        setSearchParams(newParams);
    };


    return {categoryParam, pageParam, sortField, productArray, totalPages, handleCategoryChange, handleProductSort, handlePageChange, isLoading, error}

};
