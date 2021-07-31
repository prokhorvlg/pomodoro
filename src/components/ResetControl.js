import React from 'react';

const ResetControl = ({ pomosCompleted, setPomosCompleted }) => {
  const resetSession = () => {
    setPomosCompleted(0);
  }

  return (
    <div className="control-reset">
      <button className="control-reset-button" onClick={() => { resetSession(); }}>
        <p>{pomosCompleted}</p>
        <p>Reset</p>
      </button>
    </div>
  );
}

export default ResetControl;
