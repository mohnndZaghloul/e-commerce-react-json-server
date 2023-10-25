import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../../constants/api-url";

export const fetchProducts = createAsyncThunk('productsSlice/fetchProducts', async () => {
    const res = await axios.get(PRODUCTS_URL);
    const data = await res.data;
    return data;
})

export const productSlice = createSlice({
    initialState: [],
    name: 'productsSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

// export const {} = productSlice.actions;
export default productSlice.reducer;