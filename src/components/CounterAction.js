import React from 'react';
import '../style.css';
import { useDispatch } from 'react-redux';

export default function CounterAction() {
  const dispatch = useDispatch();

  return (
    <div className="counter-action">
      <button onClick={() => dispatch({ type: 'add' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>res</button>
      <button onClick={() => dispatch({ type: 'subtratc' })}>-</button>
    </div>
  );
}
