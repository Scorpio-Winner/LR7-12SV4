import { configureStore } from '@reduxjs/toolkit';
import { ordersReducer } from './slices/order';
import { companyInfoReducer } from './slices/companyinfo';
import { orderStatusReducer } from './slices/orderstatus';

const store = configureStore({
    reducer: {
        orders: ordersReducer,
        companyInfos: companyInfoReducer,
        orderStatuses: orderStatusReducer,
    }
});

export default store;