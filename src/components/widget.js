import React, { Suspense, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Draggable from 'react-draggable';


const context = require.context('./widget-content/', true);

export default observer(function Widget ({ widget }) {
  const { z } = widget;

  const styles = {
    parent : {
      height         : '20px',
      width          : '40px',
      position       : 'fixed',
      zIndex         : `${z}`,
      backgroundColor: `green`,
      visibility     : widget.visible ? 'visible' : 'hidden'
    },
    content: {
      top     : 20,
      left    : 0,
      position: 'absolute'
    }
  };

  const ContentClass = context('./' + widget.childPath).default;

  return (
    <Draggable
      positionOffset={widget.initialPosition}
      onStart={() => {
        widget.bringToTop();
      }}
      onDrag={() => {
        // update grow values
      }}
    >{

      <div style={styles.parent}>
        <span>{widget.title}</span>
        <div style={styles.content}>
          <Suspense fallback={'loading'}>
            <ContentClass grow={{ v: 'down', h: 'right' }}/>
          </Suspense>
        </div>
      </div>
    }
    </Draggable>
  );
})
