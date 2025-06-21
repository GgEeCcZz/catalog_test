import { ProductCard } from '@/widgets/ProductCard.tsx';
import type { Product } from '@/shared/types/types.ts';

type ProductListProps= {
    productArray: Product[];
}

export const ProductList = ({productArray}: ProductListProps) => {

    return (
        <div className='grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {productArray?.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};
