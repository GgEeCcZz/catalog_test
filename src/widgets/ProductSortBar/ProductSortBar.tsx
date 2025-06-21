import { ProductSortButton } from '@/widgets/ProductSortBar/ProductSortButton.tsx';
import { CATEGORIES_FOR_SORT } from '@/shared/constants.ts';


type ProductSortBarProps = {
    sortField: string | undefined;
    handleProductSort: (sortFieldName: string) => void;
}

export const ProductSortBar = ({ sortField, handleProductSort }: ProductSortBarProps) => {

    return (
        <div className='flex flex-row justify-items-start w-full px-2 gap-5 border-y-4 border-[#CCCCCC]' >
            {CATEGORIES_FOR_SORT.map((sortCategory) => (
                <ProductSortButton
                    sortField={sortField}
                    handleProductSort={() => handleProductSort(sortCategory.sortField)}
                    sortName={sortCategory.sortField} label={sortCategory.sortLabel}
                    key={sortCategory.sortLabel}/>
            ))}
        </div>
    );
};
