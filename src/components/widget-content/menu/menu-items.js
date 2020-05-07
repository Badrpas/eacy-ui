import React from 'react';

import MenuItem from './menu-item';
import widgets from '../../../state/widgets';
// import FirstBtn from './first-btn';

export default function MenuItems() {

  return ( <React.Fragment >
    <MenuItem btnName = {'kek'} menuItemOnClick = {() => {
      widgets.toggle('heha');
    }}/>
    <MenuItem btnName = {'heh'} menuItemOnClick = {null}/>
  </React.Fragment>
  );
}
