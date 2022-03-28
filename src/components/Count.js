import React from 'react';
import '../style.css';
import { useSelector } from 'react-redux';

export default function Count() {
  const count = useSelector((state) => state.count);
  return <div className="count">Count: {count}</div>;
}
