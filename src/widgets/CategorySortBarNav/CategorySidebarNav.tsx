import { CategoryButton } from '@/widgets/CategorySortBarNav/CategoryButton.tsx';

type CategorySidebarProps = {
    handleCategoryChange: (newCategory: string) => void;
}

export const CategorySidebarNav = ({handleCategoryChange}: CategorySidebarProps) => {
    return (
        <div className='flex flex-col w-60 gap-5 border-[#CCCCCC] border-r-4'>
            <CategoryButton categoryProp={'Food 🍎'} handleCategoryChange={() => handleCategoryChange('food')} />
            <CategoryButton categoryProp={'Cloth 👔'} handleCategoryChange={() => handleCategoryChange('cloth')}/>
            <CategoryButton categoryProp={'Electronics 🎮'} handleCategoryChange={() => handleCategoryChange('electronics')}/>
        </div>
    );
};
