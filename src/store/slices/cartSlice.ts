import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from '@/shared/helpers/loaclStorage.ts';
import type { CartItem } from '@/shared/types/types.ts';

type CartState = {
    items: CartItem[];
}

const LS_KEY = 'cart';

function getInitialState (): CartState {
    const locStorData = loadFromLocalStorage<CartState>(LS_KEY);
    if (locStorData && Array.isArray(locStorData.items)) {
        return locStorData
    }
    return { items: [] };
}

const initialState: CartState = getInitialState();


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const { id, name, price, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id, name, price, quantity });
            }
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        updateQuantity: (state, action: PayloadAction<{id: number, quantity: number}>) => {
            const { id, quantity } = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                if (quantity < 1) {
                    state.items.filter((item) => item.id !== id);
                } else {
                    existingItem.quantity = quantity;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    }
})

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;