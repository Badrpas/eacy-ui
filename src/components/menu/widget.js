import React from 'react';

export default function Widget({ widgetData }) {
  if ( !widgetData.visible) {
    return null;
  }
  const { title, x, y, z } = widgetData;

  const styles = {
    heh: {
      height: '40px',
      width: '40px',
      position: 'absolute',
      top: `${y}px`,
      left: `${x}px`,
      zIndex: `${z}`,
      backgroundColor: `green`
    }
  };

  return (
    <div style={styles.heh}>
      {title}
    </div>
  );
}
