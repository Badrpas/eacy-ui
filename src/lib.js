import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';

const Form = () => {
  return <Button/>;
};

function createEl () {
  const el = document.createElement('div');
  document.querySelector('body').appendChild(el);
  return el;
}

export function setupUI (engine, el = createEl()) {
  ReactDOM.render(<Form />, el);
}
