import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {inc, dec, reset, incBy}  from '../actions';

function CounterWithHooks() {
  const counter = useSelector(state => state.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(inc())}>+</button>
      <button onClick={() => dispatch(dec())}>-</button>
      <button onClick={() => dispatch(reset())}>res</button>
      <button onClick={() => dispatch(incBy(10))}>inc by 10</button>
    </>
  )
}

export default CounterWithHooks;