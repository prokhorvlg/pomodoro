import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const ResetControl = ({ pomosCompleted, setPomosCompleted }) => {
  const resetSession = () => {
    setPomosCompleted(0);
  }

  return (
    <div className="control-reset">
      <button className="control-reset-button" onClick={() => { resetSession(); }}>
        <div className="control-reset-completed">
          <FontAwesomeIcon icon={faStopwatch} className="fa-icon" />
          <p>{pomosCompleted}</p>
        </div>
        <p>Reset</p>
      </button>
    </div>
  );
}

export default ResetControl;
