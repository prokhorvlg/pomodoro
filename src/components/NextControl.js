import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward } from '@fortawesome/free-solid-svg-icons';

const NextControl = ({ startNextSession }) => {
  const nextMode = () => {
    startNextSession();
  }

  return (
    <div className="control-next">
      <button className="control-next-button" onClick={() => { nextMode(); }}>
        <FontAwesomeIcon icon={faForward} className="fa-icon" />
      </button>
    </div>
  );
}

export default NextControl;
