import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayPauseControl = ({ timerRunning, toggleTimerRunning }) => {  
  if (timerRunning) {
    return (
      <div className="play-pause-control">
        <button className="play-pause-button" onClick={() => { toggleTimerRunning(); }}>
          <FontAwesomeIcon icon={faPause} className="fa-icon" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="play-pause-control">
        <button className="play-pause-button" onClick={() => { toggleTimerRunning(); }}>
          <FontAwesomeIcon icon={faPlay} className="fa-icon" />
        </button>
      </div>
    );
  }
  
}

export default PlayPauseControl;
