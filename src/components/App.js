import React, { useEffect, useState } from 'react';

import NextControl from './NextControl';
import SoundControl from './SoundControl';
import ResetControl from './ResetControl';
import SetsControl from './SetsControl';
import Timer from './Timer';

// content: Values displayed to the user.
const content = {
  WORK_SESSION: "work",
  SHORT_BREAK: "short break",
  LONG_BREAK: "long break",
  DONE: "done!"
};

// times: Number of seconds pre-set for each session type. 
const times = {
  WORK_SESSION: 1500,
  SHORT_BREAK: 300,
  LONG_BREAK: 1500,
};

const App = () => {
  // STATE: Contains data relevant to application.
  
  // Exact id of current session, used to determine what type of session to run. 
  const [sessionNumber, setSessionNumber] = useState(1);
  // Type of current session, displayed to user in timer dial.
  const [sessionType, setSessionType] = useState(content.WORK_SESSION);

  // Contains number of total pomo-break pairs. Adjustable by user.
  const [sets, setSets] = useState(4);
  // Total number of pomo sessions completed by user, seperate from session count used for internal calculations.
  const [pomosCompleted, setPomosCompleted] = useState(0);

  // Contains total number of seconds in current session.
  const [timeTotal, setTimeTotal] = useState(null);
  // Contains number of seconds remaining in current session.
  const [timeRemaining, setTimeRemaining] = useState(null);

  // Contains whether or not the timer is running or paused.
  const [timerRunning, setTimerRunning] = useState(false);

  // startNextSession: Decides how to start the next session based on the previous session.
  const startNextSession = () => {
    console.log(sessionNumber);
    if (sets * 2 <= sessionNumber) {
      // reset the pomo
      console.log("DONE!", sessionNumber);
      setTimerRunning(false);
      setSessionType(content.DONE);
    } else if (((sets * 2) - 2) === sessionNumber) {
      // final pomo session
      console.log("final pomo!");
      setSessionNumber((sessionNumber) => sessionNumber + 1);
      setSessionType(content.WORK_SESSION);
      setTimeRemaining(times.WORK_SESSION);
      setTimeTotal(times.WORK_SESSION);
    } else if (((sets * 2) - 1) === sessionNumber) {
      // long break at the end
      console.log("final long break!");
      setSessionNumber((sessionNumber) => sessionNumber + 1);
      setPomosCompleted((pomosCompleted) => pomosCompleted + 1);
      setSessionType(content.LONG_BREAK);
      setTimeRemaining(times.LONG_BREAK);
      setTimeTotal(times.LONG_BREAK);
    } else {
      if (sessionNumber % 2 === 0) {
        // regular pomo session
        console.log("normal pomo!");
        setSessionNumber((sessionNumber) => sessionNumber + 1);
        setSessionType(content.WORK_SESSION);
        setTimeRemaining(times.WORK_SESSION);
        setTimeTotal(times.WORK_SESSION);
      } else if (sessionNumber % 2 === 1) {
        // regular short break
        console.log("normal short break!");
        setSessionNumber((sessionNumber) => sessionNumber + 1);
        setPomosCompleted((pomosCompleted) => pomosCompleted + 1);
        setSessionType(content.SHORT_BREAK);
        setTimeRemaining(times.SHORT_BREAK);
        setTimeTotal(times.SHORT_BREAK);
      }
    }
  }

  // fullReset: Reset the app state to start mode.
  const fullReset = (retainPomosCompleted = false) => {
    console.log("full reset.");
    console.log("normal pomo!");
    setSessionNumber(1);
    setSessionType(content.WORK_SESSION);
    setTimeRemaining(times.WORK_SESSION);
    setTimeTotal(times.WORK_SESSION);
    if (!retainPomosCompleted) {
      setPomosCompleted(0);
    }
  }

  // RESET ON-LOAD: Set app into ideal state on app load.
  useEffect(() => {
    fullReset();
  }, []);  

  useEffect(() => {
    document.title = sessionType + ' - pomodoro';
  }, [sessionType]);

  return (
    <div className="app-container">
      <div className="app-title">
        <h1>pomodoro</h1>
      </div>
      <SetsControl 
          sets={sets}
          setSets={setSets}
        />
      <Timer 
          startNextSession={startNextSession}
          timeRemaining={timeRemaining}
          setTimeRemaining={setTimeRemaining}
          sessionType={sessionType}
          timeTotal={timeTotal}
          timerRunning={timerRunning}
          setTimerRunning={setTimerRunning}
          fullReset={fullReset}
          content={content}
        />
      <div className="controls">
        <ResetControl 
            pomosCompleted={pomosCompleted}
            setPomosCompleted={setPomosCompleted}
          />
        <NextControl 
            startNextSession={startNextSession}
          />
        <SoundControl 
            timeRemaining={timeRemaining}
          />
      </div>
    </div>
  );
}

export default App;
