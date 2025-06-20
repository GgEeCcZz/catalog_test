import { CartElement } from '@/widgets/CartSidebar/CartElement.tsx';
import { useAppSelector } from '@/store/hooks';

type CartSidebarProps = {
    isCartOpen: boolean;
    closeCart: () => void;
}

export const CartSidebar = ({isCartOpen, closeCart} : CartSidebarProps) => {

    const items = useAppSelector((state) => state.cart.items);

    const calcTotalPrice = (): number => {
        return items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    }

    if (!isCartOpen) {
        return null
    }

    return (

        <div
            className={`fixed inset-0 z-40 ${isCartOpen ? 'block' : 'hidden'}`}
            onClick={closeCart}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div
                className={`fixed w-[550px] top-16 right-0 bottom-0 bg-white shadow-lg rounded-xl transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-lg font-semibold">Cart</h2>
                        <button onClick={closeCart} className="text-gray-500 hover:text-gray-700">
                            ✕
                        </button>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        {items.length === 0 ? (
                            <p>Cart is empty</p>
                        ) : (
                            <ul className="space-y-4">
                                {items.map((item) => (
                                    <CartElement key={item.id} item={item}/>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="p-4 border-t">
                        <div className="flex justify-between font-semibold">
                            <span>Total: {calcTotalPrice()} ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
