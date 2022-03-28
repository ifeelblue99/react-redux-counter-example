import React from 'react';
import '../style.css';
import { useSelector } from 'react-redux';

export default function actionList() {
  const state = useSelector((state) => state);
  const { actType, time, last, average, changeCount } = state;

  return (
    <div className="list">
      <span>Old value: {last}</span>
      <span>average: {average}</span>
      <span>Action: {actType}</span>
      <span>Change count: {changeCount}</span>
      <span>Last change: {time}</span>
    </div>
  );
}
