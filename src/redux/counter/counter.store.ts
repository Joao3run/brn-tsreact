import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment(state) {
            const newState = state;
            newState.value += 1;
        },
        decrement: (state) => {
            const newState = state;

            newState.value -= 1;
        },
        incrementByAmount: (state, action) => {
            const newState = state;
            newState.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
