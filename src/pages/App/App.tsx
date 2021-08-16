import React from 'react';
import '../../translations/i18nConfig';
import '../../scss/app.scss';
import { withTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import LoadingOverlay from 'react-loading-overlay';
import { decrement } from '../../redux/counter/counter.store';
import { changeLoadingTrue, changeLoadingFalse } from '../../redux/loading/loading.store';
import { RootState } from '../../redux/store';

// eslint-disable-next-line no-unused-vars
const App: React.FC = (props: any) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const loading = useSelector((state: RootState) => state.loading);
    const dispatch = useDispatch();

    console.log('-->', loading);
    return (
        <div style={{ height: '100vh' }}>
            <LoadingOverlay
                active={loading.quantity > 0}
                spinner={
                    <svg className="load__icon">
                        <path fill="#E95C29" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                    </svg>
                }
            >
                <div style={{ height: '100vh' }}>
                    <button
                        type="button"
                        aria-label="Increment value"
                        onClick={() => {
                            dispatch(changeLoadingTrue());
                            setTimeout(() => {
                                dispatch(changeLoadingFalse());
                                dispatch(changeLoadingFalse());
                            }, 3000);
                        }}
                    >
                        Increment
                    </button>
                    <span>{count}</span>
                    <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
                        Decrement
                    </button>
                </div>
            </LoadingOverlay>
        </div>
    );
};

export default withTranslation('translation')(App);
