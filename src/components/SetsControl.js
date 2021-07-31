import React from 'react';

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
      <button onClick={() => { decreaseSets(); }}>decrease sets</button>
        <p>{sets}</p>
      <button onClick={() => { increaseSets(); }}>increase sets</button>
    </div>
  );
}

export default SetsControl;
