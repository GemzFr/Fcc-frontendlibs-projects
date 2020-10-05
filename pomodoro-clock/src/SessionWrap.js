import React from 'react'

const SessionWrap = (props) => {
  return(
    <section id='session-w'>
      <label id='session-label'>Session length</label>
      <p id='session-length'>{props.count}</p>
      <div className='btn-control'>
        <button type='button' id='session-increment' onClick={() => props.toClick({type: 'session-increment'})}>+</button>
        <button type='button' id='session-decrement' onClick={() => props.toClick({type: 'session-decrement'})}>-</button>
      </div>
    </section>
  )
}

export default SessionWrap