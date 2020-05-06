import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function createEl () {
  const el = document.createElement('div');
  document.querySelector('body').appendChild(el);
  return el;
}

export function setupUI (engine, el = createEl()) {
  ReactDOM.render(<App />, el);
}
