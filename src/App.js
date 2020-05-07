import React, { useState, useEffect } from 'react';
import MenuWidget from './components/widget-content/menu/menu-widget';
import Widget from './components/widget';
import { observer } from 'mobx-react';
import widgets from './state/widgets';


export default observer(function App() {

  return (
    <div>
      {widgets.widgets.map(widget => {
        return <Widget key={widget.id} {...{widget}}/>;
      })}
    </div>
  );
}
)
