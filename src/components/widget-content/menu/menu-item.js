import React from 'react';

export default function menuItem({btnName, menuItemOnClick}) {
  return (
    <div>
      <button onClick={menuItemOnClick}>{btnName}</button>
    </div>
  );
}
