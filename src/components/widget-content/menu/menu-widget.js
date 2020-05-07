import React, { useState } from 'react';
import MenuItems from './menu-items';

export default function MenuWidget () {
  const [visible, setVisible] = useState(true);

  const onMenuClick = () => {
    setVisible(!visible);
  };


  const styles = {
    menu: {
      position: "fixed"
    }
  };

  const mainBtn = <button onClick={onMenuClick}>Menu</button>;

  const menu = visible ?
    mainBtn :
    <React.Fragment>
      {mainBtn}
      <MenuItems/>
    </React.Fragment>;

  return (
    <div style={styles.menu}>
      {menu}
    </div>
  );
}
