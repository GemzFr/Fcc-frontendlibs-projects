import React from 'react'

const TimerWrap = (props) => {
  let timer;
  if (props.isBreak === false) {
    timer = props.sessionCount < 10 ? `0${props.sessionCount}` :  `${props.sessionCount}`
  } else {
    timer = props.breakCount < 10 ? `0${props.breakCount}` :  `${props.breakCount}`
  }
  return(
    <main id='timer-w'>
      <button type='button' id='start_stop'>Play/pause</button>
      <label htmlFor='time-left' id='timer-label'>
        {props.isBreak ? "Break timer:" : "Session timer:"}
      </label>  
        <p id='time-left'>
        {timer}
        :{props.secCount < 10 ? `0${props.secCount}` :  `${props.secCount}`}
        </p>
      <button type='button' id='reset' onClick={() => props.toClick({type: 'reset', payload: {initBreak: 5, initSession: 25, initType: false, initSec: 0}})}>Reset</button>
    </main>
  )
}

export default TimerWrap