import React, { useEffect, useState } from 'react';
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
  
  return (
    <div className="control-sound">
      <button className="control-sound-button" onClick={() => { toggleSound(); }}>
        <p>Sound?</p>
      </button>
    </div>
  );
}

export default SoundControl;
