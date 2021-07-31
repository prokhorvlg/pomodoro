import React, { useEffect, useState } from 'react';
import PlayPauseControl from './PlayPauseControl';
import TimerFillBar from './TimerFillBar';

// TIME_MULTIPLIER: Controls the rate at which time progresses in the timer.
const TIME_MULTIPLIER = 0.001;

const Timer = ({ startNextSession, timeRemaining, setTimeRemaining, sessionType, timeTotal, timerRunning, setTimerRunning, fullReset, content }) => {
  // Contains the time content displayed to user in timer dial.
  const [timeString, setTimeString] = useState(null);

  // TIMER: Contains the logic which controls the timer interval.
  useEffect(() => {
    let timerInterval;
    if (timerRunning) {
      timerInterval = setInterval(() => {
        const newTimeRemaining = timeRemaining - 1;
        if (newTimeRemaining === -1) {
          startNextSession();
          console.log("ended session");
        } else {
          setTimeRemaining(newTimeRemaining);
        }
      }, 1000 * TIME_MULTIPLIER)
    }
    return () => clearInterval(timerInterval);
  }, [timerRunning, timeRemaining]);

  // TIMER PARSING: Parses the time remaining into a printable string.
  useEffect(() => {
    var minutes = Math.floor(timeRemaining / 60);
    var seconds = timeRemaining - minutes * 60;
    setTimeString(minutes + ":" + seconds);
  }, [timeRemaining]);

  const toggleTimerRunning = () => {
    if (sessionType === content.DONE) {
      fullReset(true);
    }
    setTimerRunning(!timerRunning);
  }
  
  return (
    <>
      <div className="timer">
        <button className="timer-button" onClick={() => { toggleTimerRunning(); }}>
          <TimerFillBar 
              timeRemaining={timeRemaining}
              timeTotal={timeTotal}
            />
          <div className="timer-time-remaining">
            <p>{timeString}</p>
          </div>
          <div className="timer-mode">
            <p>{sessionType}</p>
          </div>
        </button>
      </div>
      <PlayPauseControl 
          toggleTimerRunning={toggleTimerRunning}
        />
    </>
  );
}

export default Timer;
