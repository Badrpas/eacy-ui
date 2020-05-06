import React from 'react';

import MenuItem from './menu-item';
// import FirstBtn from './first-btn';

export default function MenuItems() {

  const click = (data) => {
    // // const item = data;
    // const item =  {
    //   ...this.state[first],
    //   visible: true
    // }
    // this.setState({[data.id]: {
    //   ...this.state[first],
    //   visible: true
    // }})
  }

  return ( <React.Fragment >
    <MenuItem btnName = {'kek'} menuItemOnClick = {click}/>
    <MenuItem btnName = {'heh'} menuItemOnClick = {click}/> 
  </React.Fragment>
  );
}
