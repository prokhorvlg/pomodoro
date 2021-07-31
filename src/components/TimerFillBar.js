import React, { useEffect, useState } from 'react';

const TimerFillBar = ({ timeRemaining, timeTotal }) => {

  const [fillRemaining, setFillRemaining] = useState(0);

  useEffect(() => {
    const fraction = timeRemaining / timeTotal;
    setFillRemaining(440 - (440 * fraction));
  }, [timeRemaining]);

  return (
      <div className="timer-dial">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
          <circle r="69.85699" cy="81" cx="81" fill="none" 
            stroke="white" 
            strokeWidth="1" 
            />
          <circle r="69.85699" cy="81" cx="81" fill="none" 
            stroke="green" 
            strokeWidth="6" 
            strokeDasharray={440} 
            strokeDashoffset={fillRemaining}
            strokeLinecap="round"
            />
          
        </svg>
        <p>{timeTotal}</p>
      </div>
  );
}

export default TimerFillBar;
