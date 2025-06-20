interface ProductSortButtonProps {
    sortField: string | undefined;
    handleProductSort: () => void;
    sortName: string;
    label: string;
}

export const ProductSortButton = ({sortField, handleProductSort, sortName, label}: ProductSortButtonProps) => {
    const isActive = sortField === sortName || sortField === `-${sortName}`;
    const isDescending = sortField === `-${sortName}`;
    const arrow = isActive ? (isDescending ? '↓' : '↑') : '';

    return (
        <button
            className='p-1 hover:bg-[#CCCCCC] active:bg-gray-300'
            onClick={() => handleProductSort()}
        >
            {label} {arrow}
        </button>
    );
};