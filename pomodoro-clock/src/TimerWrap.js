import React, {useEffect, useState} from 'react'

const TimerWrap = (props) => {
  const [seconds, setSeconds] = useState(0)
  const [timerState, setTimerState] = useState(true);
  const [pause, setPause] = useState(true)

  const handleClick = () => {
    setPause(!pause)
  }
  
  useEffect(() => {
    if (!pause) {
      const timer = setInterval(() => {
       if (seconds === 0) {
         setSeconds(59);
       } else {
         setSeconds(s => s - 1)
       } 
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [pause, seconds]);

  return(
    <section className='timer-container' id='timer-label'>
      <label>{props.labelType.charAt(0).toUpperCase() + props.labelType.slice(1)}</label>
      <p id='time-left'>
        {
          !timerState ?  
            props.breakTime < 10 ? 
              `0${props.breakTime}` : `${props.breakTime}`
            : props.sessionTime < 10 ? 
              `0${props.sessionTime}` : `${props.sessionTime}` 
        }:
        {seconds < 10 ? `0${seconds}` : `${seconds}`}
      </p>
      <div className='btn-wrap'>
      <button type='button' id='start_stop' onClick={handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path d="M9.5 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842l-5.576 3.584a.5.5 0 01-.77-.42z"></path><path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path></svg>
      </button>
      <span> </span>
      <button type='button' id='reset'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40"><path d="M3.38 8A9.502 9.502 0 0112 2.5a9.502 9.502 0 019.215 7.182.75.75 0 101.456-.364C21.473 4.539 17.15 1 12 1a10.995 10.995 0 00-9.5 5.452V4.75a.75.75 0 00-1.5 0V8.5a1 1 0 001 1h3.75a.75.75 0 000-1.5H3.38zm-.595 6.318a.75.75 0 00-1.455.364C2.527 19.461 6.85 23 12 23c4.052 0 7.592-2.191 9.5-5.451v1.701a.75.75 0 001.5 0V15.5a1 1 0 00-1-1h-3.75a.75.75 0 000 1.5h2.37A9.502 9.502 0 0112 21.5c-4.446 0-8.181-3.055-9.215-7.182z"></path><path d="M12 17a1 1 0 100-2 1 1 0 000 2zm0-10a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0112 7z"></path></svg>
      </button>
      </div>
    </section>
  )
}

export default TimerWrap