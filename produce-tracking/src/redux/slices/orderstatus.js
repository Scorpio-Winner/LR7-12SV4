import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import host from "../index.js";

export const fetchOrderStatuses = createAsyncThunk('orderStatuses/fetchOrderStatuses', async () => {
    const { data } = await host.get('/api/order-statuses');
    return data;
});

const initialState = {
    orderStatuses: {
        items: [],
        status: 'loading',
    },
};

const orderStatusSlice = createSlice({
    name: 'orderStatus',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderStatuses.pending, (state) => {
                state.orderStatuses.items = [];
                state.orderStatuses.status = 'loading';
            })
            .addCase(fetchOrderStatuses.fulfilled, (state, action) => {
                state.orderStatuses.items = action.payload;
                state.orderStatuses.status = 'loaded';
            })
            .addCase(fetchOrderStatuses.rejected, (state) => {
                state.orderStatuses.items = [];
                state.orderStatuses.status = 'error';
            });
    },
});

export const orderStatusReducer = orderStatusSlice.reducer;