import React, {useState, useEffect} from 'react'
import TypeWrap from './TypeWrap'
import TimerWrap from './TimerWrap'
import './App.css'

const App = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [storeBreak, setStoreBreak] = useState(0);
  const [sessionTime, setSessionTime] = useState(25);
  const [storeSession, setStoreSession] = useState(25);
  const [seconds, setSeconds] = useState(0)
  const [pause, setPause] = useState(true)
  const [isBreak, setIsBreak] = useState(false)
  const [isCountdown, setIsCountdown] = useState(false)

  const handleCountDownClick = () => {
    setPause(!pause);
    setIsCountdown(true);
  }

  const handleReset = () => {
    setBreakTime(5);
    setSessionTime(25);
    setSeconds(0);
    setPause(true);
    setIsBreak(false);
    setIsCountdown(false);
  }
  
  useEffect(() => {
    if (!pause) {
      const timer = setInterval(() => {
        if (sessionTime === 0 && seconds === 0) {
          return setIsBreak(true)
        }
        if (seconds === 0) {
          setSeconds(59);
          setSessionTime(m => m - 1);
        } else {
          setSeconds(s => s - 1);
        } 
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [pause, seconds, sessionTime]);

  useEffect(() => {
    if (isBreak) {
      const timer = setInterval(() => {
        if (breakTime === 0 && seconds === 0) {
          setIsBreak(false);
        } 
        if (seconds === 0) {
          setSeconds(59);
          setBreakTime(m => m - 1);
        } else {
          setSeconds(s => s - 1);
        }
      }, 1000);
      return () => clearInterval(timer)
    }
  }, [isBreak, seconds, breakTime])

  const handleControlClick = (e) => {
    const target = e.target.closest('button').id;
    e.preventDefault();

    switch (target) {
      case 'break-increment':
        if (breakTime < 60) setBreakTime(c => c + 1);
        break;
      case 'break-decrement':
        if (breakTime > 1) setBreakTime(c => c - 1);
        break;
      case 'session-increment':
        if (sessionTime < 60) setSessionTime(c => c + 1);
        break;
      case 'session-decrement':
        if (sessionTime > 1) setSessionTime(c => c - 1);
        break;
      default:
        console.log('Unknown error')
    }
  }

  return (
    <div className="App">
      <TimerWrap 
        labelType='timer' 
        sessionTime={sessionTime} 
        breakTime={breakTime}
        handleClick={handleCountDownClick}
        handleReset={handleReset}
        seconds={seconds}
        isCountdown={isCountdown}
        isBreak={isBreak}
        />
      <div className='label-container'>
        <TypeWrap labelType='session' timerType={sessionTime} handleClick={handleControlClick}/>
        <TypeWrap labelType='break' timerType={breakTime} handleClick={handleControlClick}/>
      </div>
    </div>
  );
}

export default App;
