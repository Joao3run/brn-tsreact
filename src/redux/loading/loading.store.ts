import { createSlice } from '@reduxjs/toolkit';

const store = createSlice({
    name: 'loading',
    initialState: {
        quantity: 0,
    },
    reducers: {
        changeLoadingTrue(state) {
            const newState = state;
            newState.quantity += 1;
        },

        changeLoadingFalse(state) {
            const newState = state;
            newState.quantity = newState.quantity <= 0 ? 0 : newState.quantity - 1;
        },
    },
});

export const { changeLoadingTrue, changeLoadingFalse } = store.actions;

export default store.reducer;
