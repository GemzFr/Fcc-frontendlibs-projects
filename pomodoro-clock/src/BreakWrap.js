import React from 'react'

const BreakWrap = (props) => {
  return(
    <section id='break-w'>
      <label id='break-label'>Break length</label>
      <p id='break-length'>{props.count}</p>
      <div className='btn-control'>
        <button type='button' id='break-increment' onClick={() => props.toClick({type: 'break-increment'})}>+</button>
        <button type='button' id='break-decrement' onClick={() => props.toClick({type: 'break-decrement'})}>-</button>
      </div>
    </section>
  )
}

export default BreakWrap