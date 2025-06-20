import { ProductSortButton } from '@/widgets/ProductSortBar/ProductSortButton.tsx';


type ProductSortBarProps = {
    sortField: string | undefined;
    handleProductSort: (sortFieldName: string) => void;
}

export const ProductSortBar = ({ sortField, handleProductSort }: ProductSortBarProps) => {

    return (
        <div className='flex flex-row justify-items-start w-full px-2 gap-5 border-y-4 border-[#CCCCCC]'>
            <ProductSortButton sortField={sortField} handleProductSort={() => handleProductSort('name')} sortName={'name'} label={'Name'} />
            <ProductSortButton sortField={sortField} handleProductSort={() => handleProductSort('price')} sortName={'price'} label={'Price'} />
            <ProductSortButton sortField={sortField} handleProductSort={() => handleProductSort('type')} sortName={'type'} label={'Type'} />
        </div>
    );
};
