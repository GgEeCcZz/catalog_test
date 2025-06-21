import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '@/store/api/productsApi.ts';
import cartReducer from '@/store/slices/cartSlice.ts';
import { saveToLocalStorage } from '@/shared/helpers/loaclStorage.ts';


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

store.subscribe(() => {
    const state = store.getState();
    saveToLocalStorage('cart', state.cart);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;