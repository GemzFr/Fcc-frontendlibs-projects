import React from 'react'
import buttonsData from './buttonsData'

const Button = (props) => {
  return(
    buttonsData.map(btn => <button onClick={props.handleClick} data-oftype={btn.oftype} value={btn.value} className="button btn" key={btn.value} id={btn.id}>{btn.value}</button>)
  )
}

export default Button