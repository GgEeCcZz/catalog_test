import React from 'react';
import { type CartItem, removeItem, updateQuantity } from '@/store/slices/cartSlice.ts';
import { useAppDispatch } from '@/store/hooks';

type CartElementProps = {
    item: CartItem
}

export const CartElement = React.memo(({ item }: CartElementProps) => {
    const dispatch = useAppDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem({
            id: item.id,
        }))
    };

    const incrementItemQuantity = () => {
        dispatch(updateQuantity({
            id: item.id,
            quantity: item.quantity + 1,
        }))
    }

    const decrementItemQuantity = () => {
        dispatch(updateQuantity({
            id: item.id,
            quantity: item.quantity - 1,
        }))
    }

    return (
        <div className='flex justify-between items-center border-b-2 border-solid border-[#CCCCCC]'>
            <span className='text-base w-[150px]'>{item.name}</span>
            <div  className='flex items-center gap-1 text-base border-2 border-solid border-[#CCCCCC] rounded-lg'>
                <button onClick={decrementItemQuantity} className='px-2 hover:bg-[#CCCCCC] active:bg-gray-300'>-</button>
                <span  className='px-2'>{item.quantity}</span>
                <button onClick={incrementItemQuantity} className='px-2 hover:bg-[#CCCCCC] active:bg-gray-300'>+</button>
            </div>
            <span  className='text-base'>Price: {item.price * item.quantity}</span>
            <button onClick={handleRemoveItem}  className='text-base hover:bg-[#CCCCCC] active:bg-gray-300 px-2 rounded-lg border-2 border-solid border-[#CCCCCC]'>Delete</button>
        </div>
    );
});
