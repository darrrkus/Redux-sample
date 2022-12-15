import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import reducer from './reducer';
import {inc, dec, reset} from './actions';

import './index.css';




const store = createStore(reducer);
store.subscribe(() => {
    document.getElementById('counter').textContent = store.getState();
    console.log(store.getState())
})



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

