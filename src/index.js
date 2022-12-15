import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';


const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return 0;
        case 'INCBY':
            return state + action.payload;
        default:
            return state;
    }
};

const store = createStore(reducer);
store.subscribe(() => {
    document.getElementById('counter').textContent = store.getState();
    console.log(store.getState())
})

const inc = () => ({ type: 'INC' });
const dec = () => ({type: 'DEC' }) ;
const reset = () => ({ type: 'RESET' });

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
    store.dispatch(dec())
});

document.getElementById('res').addEventListener('click', () => {
    store.dispatch(reset())
});
// store.dispatch(inc());


// let state = reducer(undefined, { type: 'INC' });
// state = reducer(state, { type: 'INCBY', payload: 10 });
// state = reducer(state, { type: 'INC' });
// state = reducer(state, { type: 'INC' });
// console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>



        </>
    </React.StrictMode>
);

