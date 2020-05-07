import React, { Suspense, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Draggable from 'react-draggable';


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

  const [ContentClass, SetContentClass] = useState();

  useEffect(() => {
    const ContentClass = React.lazy(() => import('./widget-content/' + widget.childPath));
    SetContentClass(ContentClass);
  }, [widget.childPath]);

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
            {ContentClass ? <ContentClass grow={{ v: 'down', h: 'right' }}/> : null}
          </Suspense>
        </div>
      </div>
    }
    </Draggable>
  );
})
