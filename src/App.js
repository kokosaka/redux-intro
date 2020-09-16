import React from 'react';
//pulling state from store into a component
import {useSelector, useDispatch} from 'react-redux';

import {increment, decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>counter {counter}</div>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogged ? <div>isLogged </div> : <div>notLogged</div>}
    </div>
  );
}

export default App;
