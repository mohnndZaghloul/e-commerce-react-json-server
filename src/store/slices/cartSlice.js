import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CART_URL } from "../../constants/api-url";


export const fetchCart = createAsyncThunk('cartSlice/fetchCart', async () => {
    const res = await axios.get(CART_URL);
    const data = await res.data;
    return data;
})

export const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((item) => item.id === action.payload.id)
            if(findProduct) {
                findProduct.amount += 1;
                axios.put(`${CART_URL}/${findProduct.id}`, findProduct);
            }else {
                const productClone = {...action.payload, amount: 1}
                state.push(productClone);
                axios.post(CART_URL, productClone);
            }
        },
        removeFromCart: (state, action) => {
            const findProduct = state.find((item) => item.id === action.payload.id)
            if(findProduct.amount > 1) {
                findProduct.amount -= 1;
                axios.put(`${CART_URL}/${findProduct.id}`, findProduct);
            }else {
                axios.delete(`${CART_URL}/${findProduct.id}`);
                return state.filter((product) => product.id !== action.payload.id);
            }
        },
        deleteFromCart: (state, action) => {
            const findProduct = state.find((item) => item.id === action.payload.id)
            axios.delete(`${CART_URL}/${findProduct.id}`);
            return state.filter((product) => product.id !== action.payload.id);
        },
        clear: () => {
            axios.put(CART_URL, []);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled , (state, action) => {
            return action.payload;
        })
    }
})

export const {addToCart, removeFromCart, deleteFromCart, clear} = cartSlice.actions;

export default cartSlice.reducer; 