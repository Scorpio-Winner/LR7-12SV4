import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import host from "../index.js";

export const fetchCompaniesInfo = createAsyncThunk('companyInfos/fetchCompaniesInfo', async () => {
    const { data } = await host.get('/api/companies-info');
    return data;
});

const initialState = {
    companyInfos: {
        items: [],
        status: 'loading',
    },
};

const companyInfoSlice = createSlice({
    name: 'companyInfos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCompaniesInfo.pending, (state) => {
                state.companyInfos.items = [];
                state.companyInfos.status = 'loading';
            })
            .addCase(fetchCompaniesInfo.fulfilled, (state, action) => {
                state.companyInfos.items = action.payload;
                state.companyInfos.status = 'loaded';
            })
            .addCase(fetchCompaniesInfo.rejected, (state) => {
                state.companyInfos.items = [];
                state.companyInfos.status = 'error';
            });
    },
});

export const companyInfoReducer = companyInfoSlice.reducer;