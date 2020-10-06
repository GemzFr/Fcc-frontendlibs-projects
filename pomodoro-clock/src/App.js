import React from 'react'
import TypeWrap from './TypeWrap'
import TimerWrap from './TimerWrap'

const App = () => {
  return (
    <div className="App">
      <TimerWrap labelType='timer' timerType='25:00'/>
      <div className='container'>
        <TypeWrap labelType='session' timerType='25'/>
        <TypeWrap labelType='break' timerType='5'/>
      </div>
    </div>
  );
}

export default App;
