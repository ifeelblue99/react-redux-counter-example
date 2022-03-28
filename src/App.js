import React from 'react';
import './style.css';
import Count from './components/Count';
import CounterAction from './components/CounterAction';
import ActionList from './components/ActionList';

export default function App() {
  return (
    <div className="app">
      <Count />
      <CounterAction />
      <ActionList />
    </div>
  );
}
