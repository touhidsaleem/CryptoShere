import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name: "toast",
    initialState: { message: null, type: null },
    reducers: {
        showToast: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        },
    },
});

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
