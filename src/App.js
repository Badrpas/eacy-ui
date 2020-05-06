import React, { useState, useEffect } from 'react';
import MenuWidget from './components/menu/menu-widget';
import Widget from './components/menu/widget';

export default function App() {
  const [widgets, setWigets] = useState([]);

  useEffect(() => {
    addWidgetData('kek1', { data: 'kek' });
    addWidgetData('kek2', { data: 'heh' });
    addWidgetData('kek3', { data: 'hueh' });
  }, []) 
  

  return (
    <div>
      <MenuWidget/>
      {widgets.map(data => <Widget key={data.data} widgetData={data} />)} 
    </div>
  );

  function addWidgetData(title, options = {}) {
    setWigets([
      ...widgets,
      {
        x: 100,
        y: 100,
        title,
        visible: true,
        z: 100,
        ...options
      }
    ]);
  }
}
