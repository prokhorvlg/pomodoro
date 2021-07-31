import React, { useEffect, useState } from 'react';
import PlayPauseControl from './PlayPauseControl';
import TimerFillBar from './TimerFillBar';

// TIME_MULTIPLIER: Controls the rate at which time progresses in the timer.
const TIME_MULTIPLIER = 0.001;

const Timer = ({ startNextSession, timeRemaining, setTimeRemaining, sessionString, sessionType, timeTotal, timerRunning, setTimerRunning, fullReset, content }) => {
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
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining - minutes * 60;
    let time = "";
    if (minutes.toString().length === 1) {
      time = "0" + minutes.toString();
    } else {
      time = minutes.toString();
    }
    time += ":";
    if (seconds.toString().length === 1) {
      time = time + "0" + seconds.toString();
    } else {
      time = time + seconds.toString();
    }
    setTimeString(time);
  }, [timeRemaining]);

  useEffect(() => {
    if (sessionType === "DONE") {
      setTimeRemaining(0);
    }
  }, [sessionType]);

  const toggleTimerRunning = () => {
    if (sessionType === "DONE") {
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
              sessionType={sessionType}
              content={content}
            />
          <div className="timer-time-remaining">
            <p>{timeString}</p>
          </div>
          <div className="timer-mode">
            <p>{sessionString}</p>
          </div>
        </button>
      </div>
      <PlayPauseControl 
          timerRunning={timerRunning}
          toggleTimerRunning={toggleTimerRunning}
        />
    </>
  );
}

export default Timer;
