
type PaginationProps = {
    pageParam: number;
    totalPages: number;
    handlePageChange: (pageParam: number) => void;
}

export const Pagination = ({pageParam, totalPages, handlePageChange}: PaginationProps) => {
    return (
        <div className='flex flex-row justify-center w-full px-1 gap-3 border-y-4 border-[#CCCCCC]'>
            {Array.from({length: totalPages}).map((_, i) => (
                <button
                    key={i + 1}
                    disabled={pageParam === i + 1}
                    onClick={() => {handlePageChange(i + 1)}}
                    className='px-4 py-2 hover:bg-[#CCCCCC] active:bg-gray-300'
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};
