import { CategoryButton } from '@/widgets/CategorySortBarNav/CategoryButton.tsx';
import { CATEGORIES_ARRAY } from '@/shared/constants.ts';

type CategorySidebarProps = {
    handleCategoryChange: (newCategory: string) => void;
}

export const CategorySidebarNav = ({handleCategoryChange}: CategorySidebarProps) => {
    return (
        <div className='flex flex-col w-60 gap-5 border-[#CCCCCC] border-r-4'>
            {CATEGORIES_ARRAY.map((category) => (
                <CategoryButton categoryProp={category.label} handleCategoryChange={() => handleCategoryChange(category.value)} key={category.label} />
            ))}
        </div>
    );
};
