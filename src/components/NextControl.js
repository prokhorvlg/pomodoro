import React from 'react';

const NextControl = ({ startNextSession }) => {
  const nextMode = () => {
    startNextSession();
  }

  return (
    <div className="control-next">
      <button className="control-next-button" onClick={() => { nextMode(); }}>
        <p>Next</p>
      </button>
    </div>
  );
}

export default NextControl;
