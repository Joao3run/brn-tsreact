import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loading/loading.store';
import counterReducer from './counter/counter.store';

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        counter: counterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
