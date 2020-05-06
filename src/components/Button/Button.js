import React from 'react';

const STYLE = {
  position: 'fixed',
  top:  0,
};

export function Button (props) {

  return (
    <div
      onClick={props.onClick}
      onMouseOver={props.onHover}
      style={STYLE}
    >
      click me
    </div>
  );
}
