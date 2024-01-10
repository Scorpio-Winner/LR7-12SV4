import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import host from "../index.js";

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    const { data } = await host.get('/api/orders');
    return data;
});

export const createOrder = createAsyncThunk('orders/createOrder', async (orderData) => {
    const { data } = await host.post('/api/create-order', orderData);
    return data;
});

export const updateOrder = createAsyncThunk('orders/updateOrder', async ({ orderId, updateData }) => {
    const { data } = await host.put(`/api/order/update/${orderId}`, updateData);
    return data;
});

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (orderId) => {
    await host.delete(`/api/order/delete/${orderId}`);
    return orderId;
});

const initialState = {
    orders: {
        items: [],
        status: 'loading',
    },
};

const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.orders.items = [];
                state.orders.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.orders.items = action.payload;
                state.orders.status = 'loaded';
            })
            .addCase(fetchOrders.rejected, (state) => {
                state.orders.items = [];
                state.orders.status = 'error';
            })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.orders.items.push(action.payload);
            })
            .addCase(updateOrder.fulfilled, (state, action) => {
                const index = state.orders.items.findIndex(order => order._id === action.payload._id);
                if (index !== -1) {
                    state.orders.items[index] = action.payload;
                }
            })
            .addCase(deleteOrder.fulfilled, (state, action) => {
                state.orders.items = state.orders.items.filter(order => order._id !== action.payload);
            });
    },
});

export const ordersReducer = orderSlice.reducer;