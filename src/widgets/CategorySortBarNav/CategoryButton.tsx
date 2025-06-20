
type CategoryButtonProps = {
    categoryProp: string;
    handleCategoryChange: () => void;
}

export const CategoryButton = ({ categoryProp, handleCategoryChange }: CategoryButtonProps) => {
    return (
        <button
            className='h-14 text-2xl bg-[#FFFFFF] hover:bg-[#CCCCCC] active:bg-gray-300'
            onClick={() => handleCategoryChange()}
        >
            {categoryProp}
        </button>
    );
};
