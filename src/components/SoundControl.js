import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

import DingSound from '../assets/DingSound.wav';

const SoundControl = ({ timeRemaining }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  }

  // TIMER SOUND: Plays sound when timeRemaining reaches zero.
  useEffect(() => {
    if (soundEnabled && timeRemaining === 0) {
      new Audio(DingSound).play();
    }
  }, [timeRemaining]);
  
  if (soundEnabled) {
    return (
      <div className="control-sound">
        <button className="control-sound-button" onClick={() => { toggleSound(); }}>
          <FontAwesomeIcon icon={faVolumeUp} className="fa-icon" />
        </button>
      </div>
    );
  } else {
    return (
      <div className="control-sound">
        <button className="control-sound-button" onClick={() => { toggleSound(); }}>
          <FontAwesomeIcon icon={faVolumeMute} className="fa-icon" />
        </button>
      </div>
    );
  }
  
}

export default SoundControl;
