import { useState } from 'react';
import { CartSidebar } from '@/widgets/CartSidebar/CartSidebar.tsx';
import { useAppSelector } from '@/store/hooks';


export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const itemsCount = useAppSelector((state) => {
        return state.cart.items.reduce((acc, cur) => acc + cur.quantity, 0);
    });

    const toggleCart = () => {
        setIsOpen((prev) => !prev);
    }

    return (
        <header className="h-20 text-3xl bg-[#FFFFFF] text-[#2C3E50] border-solid rounded-lg	border-[#CCCCCC] border-4 flex justify-between items-center px-5 shadow-md z-50 fixed top-0 left-0 w-full m-1">
            CATALOG: FOOD, CLOTH & ELECTRONICS
            <button
                onClick={toggleCart}
                className='p-3 bg-[#28A745] hover:bg-green-500 active:bg-green-700 rounded-2xl'
            >
                🛒 ({itemsCount})
            </button>
            <CartSidebar isCartOpen={isOpen} closeCart={() => setIsOpen(false)} />
        </header>
    );
};
