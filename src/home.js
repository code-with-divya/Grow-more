import logo from './logo.svg';
import './App.css';

import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <h2>This is the Child Component</h2>
      <p>{props.name}</p>
      <p>The number is: {props.number}</p>
      <p>city{props.city}</p>
    </div>
  );
};

export default ChildComponent;
