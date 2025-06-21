import { ProductList } from '@/widgets/ProductList.tsx';
import { CategorySidebarNav } from '@/widgets/CategorySortBarNav/CategorySidebarNav.tsx';
import { ProductSortBar } from '@/widgets/ProductSortBar/ProductSortBar.tsx';
import { useGetSearchParams } from '@/hooks/useGetSearchParams.ts';
import { Pagination } from '@/widgets/Pagination.tsx';


export const CategoryPage = () => {
    const {categoryParam, pageParam, sortField, productArray, totalPages, handleCategoryChange, handleProductSort, handlePageChange, isLoading, error} = useGetSearchParams();



    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Something went wrong to load category</div>;

    return (
        <div className='flex flex-row h-full pt-20'>
            <CategorySidebarNav handleCategoryChange={handleCategoryChange}/>
            <div className='flex flex-col items-center gap-4 w-full'>
                <h1 className='text-3xl pt-4'>Category: {categoryParam}</h1>
                <ProductSortBar sortField={sortField} handleProductSort={handleProductSort}/>
                <ProductList productArray={productArray}/>
                <Pagination pageParam={pageParam} totalPages={totalPages} handlePageChange={handlePageChange}/>
            </div>
        </div>
    );
};
