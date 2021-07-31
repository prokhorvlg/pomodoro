import React, { useEffect, useState } from 'react';

// Contains the CSS classes that will be applied to SVG element to determine color.
const sessionClasses = {
  WORK_SESSION: "color-work",
  SHORT_BREAK: "color-short-break",
  LONG_BREAK: "color-long-break",
  DONE: "color-done"
}

const TimerFillBar = ({ timeRemaining, timeTotal, sessionType }) => {
  const [fillRemaining, setFillRemaining] = useState(0);
  const [sessionClass, setSessionClass] = useState(null);

  useEffect(() => {
    const fraction = timeRemaining / timeTotal;
    setFillRemaining(440 - (440 * fraction));
  }, [timeRemaining]);

  useEffect(() => {
    setSessionClass(sessionClasses[sessionType]);
  }, [sessionType]);

  return (
    <div className="timer-dial">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
        <circle r="69.85699" cy="81" cx="81" fill="none" className="timer-faded-circle"
          strokeWidth="1" 
          />
        <circle r="69.85699" cy="81" cx="81" fill="none" className={sessionClass}
          strokeWidth="6" 
          strokeDasharray="440"
          strokeDashoffset={fillRemaining}
          strokeLinecap="round"
          />
      </svg>
    </div>
  );
}

export default TimerFillBar;
