import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const person = {
  name: 'Le Xuan Hung',
  age: 22,
  status: false
}

function total(giatriA, giatriB){
  return giatriA + giatriB
}

const a = 100
const b = 200

const element = (
  <h1>Tong La: {total(a,b)}</h1>
)

ReactDOM.render(
  element,
  
  document.getElementById('root')
);
