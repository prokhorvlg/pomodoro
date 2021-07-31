import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const SetsControl = ({ sets, setSets }) => {
  const decreaseSets = () => {
    if (sets > 1) {
      setSets((sets) => sets - 1);
    }
  }

  const increaseSets = () => {
    if (sets < 10) {
      setSets((sets) => sets + 1);
    }
  }

  return (
    <div className="control-sets">
      <h2 className="control-sets-title">Sets</h2>
      <div className="control-sets-body">
        <button onClick={() => { decreaseSets(); }}>
          <FontAwesomeIcon icon={faMinus} className="fa-icon" />
        </button>
        <p className="control-sets-label">{sets}</p>
        <button onClick={() => { increaseSets(); }}>
          <FontAwesomeIcon icon={faPlus} className="fa-icon" />
        </button>
      </div>
    </div>
  );
}

export default SetsControl;
