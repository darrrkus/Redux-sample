// import { bindActionCreators } from '@reduxjs/toolkit';
import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions';

function Counter({counter, inc, dec, reset, incBy}) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <button onClick={reset}>res</button>
      <button onClick={() => incBy(10)}>inc by 10</button>
    </>
  )
}

const mapStatetoProps = (state) => ({counter: state.value});
// const mapDispatchToProps = (dispatch) => {
//   return {...bindActionCreators(actions, dispatch)};
//   }
export default connect(mapStatetoProps, actions)(Counter);
// export default connect(mapStatetoProps, mapDispatchToProps)(Counter);