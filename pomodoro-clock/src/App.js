import React, {useReducer} from 'react';
import './App.css';
import TimerWrap from './TimerWrap'
import BreakWrap from './BreakWrap'
import SessionWrap from './SessionWrap'

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'break-increment':
      if (state.breakCount >= 60) return state;
      return {...state, breakCount: state.breakCount + 1};
    case 'break-decrement':
      if (state.breakCount <= 1) return state;
      return {...state, breakCount: state.breakCount - 1};
    case 'session-increment':
      if (state.sessionCount >= 60) return state;
      return {...state, sessionCount: state.sessionCount + 1};
    case 'session-decrement':
      if (state.sessionCount <= 1) return state;
      return {...state, sessionCount: state.sessionCount - 1};
    case 'reset':
      return initState(action.payload);
    default:
      throw new Error(`Unknown ${action.type} error`)
  }
}

const initState = ({initBreak = 5, initSession = 25, initType = false, initSec = 0}) => {
  return {
    breakCount: initBreak,
    sessionCount: initSession,
    isBreak: initType,
    secCount: initSec,
  }
}

const App = () => {
  const [count, dispatchCount] = useReducer(counterReducer, 0, initState)
 
  return (
    <div className="App">
      <TimerWrap 
        isBreak={count.isBreak}
        breakCount={count.breakCount}
        sessionCount={count.sessionCount}
        secCount={count.secCount}
        toClick={dispatchCount}
      />
      <BreakWrap count={count.breakCount} toClick={dispatchCount}/>
      <SessionWrap count={count.sessionCount} toClick={dispatchCount}/>
    </div>
  );
}

export default App;
