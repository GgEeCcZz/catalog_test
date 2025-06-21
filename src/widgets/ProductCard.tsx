import type { Product } from '@/shared/types/types.ts';
import { useAppDispatch } from '@/store/hooks';
import { addItem } from '@/store/slices/cartSlice.ts';

type ProductCardProps = {
    product: Product;
}
export const ProductCard = ({product}: ProductCardProps) => {
    const dispatch = useAppDispatch();

    const addToCart = () => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        }))
    }

    return (
        <div className='border-[#CCCCCC] rounded-lg border-solid border-2 flex justify-center items-center gap-3 flex-col p-2 w-80'>
            <img src={product.img} alt={product.name} className="h-40 w-72 rounded-lg"/>
            <div className='flex flex-col justify-center items-center'>
                <h3 className="text-[#212121] text-xl">{product.name}</h3>
                <p className="text-[#212121] text-xl">{product.price} Р</p>
            </div>
            <button
                className='bg-[#007BFF] hover:bg-[#28A745] active:bg-green-700 text-[#FFFFFF] rounded-lg p-2'
                onClick={addToCart}
            >
                Add to cart 🛒</button>
        </div>
    );
};
