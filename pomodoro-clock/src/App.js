import React, {useState} from 'react'
import TypeWrap from './TypeWrap'
import TimerWrap from './TimerWrap'
import './App.css'

const App = () => {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);

  const handleClick = (e) => {
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
      <TimerWrap labelType='timer' sessionTime={sessionTime} breakTime={breakTime}/>
      <div className='label-container'>
        <TypeWrap labelType='session' timerType={sessionTime} handleClick={handleClick}/>
        <TypeWrap labelType='break' timerType={breakTime} handleClick={handleClick}/>
      </div>
    </div>
  );
}

export default App;
