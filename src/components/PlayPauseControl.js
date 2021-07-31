

import React from 'react';

const PlayPauseControl = ({ toggleTimerRunning }) => {  
  return (
    <div className="play-pause-control">
      <button className="play-pause-button" onClick={() => { toggleTimerRunning(); }}>
        Play/Pause
        </button>
    </div>
  );
}

export default PlayPauseControl;
