import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_URL } from "../../constants/api-url";


export const logIn = createAsyncThunk('userSlice/logIn', async (userID) => {
    const res = await axios.get(`${USERS_URL}/${userID}`);
    const user = await res.data;
    return {'id': userID, 'name': `${user.firstname} ${user.lastname}`};
})

export const userSlice = createSlice({
    initialState: {},
    name: 'userSlice',
    reducers: {
        logOut: () => {
            return {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const {logOut} = userSlice.actions;

export default userSlice.reducer;