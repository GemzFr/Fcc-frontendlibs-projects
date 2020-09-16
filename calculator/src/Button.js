import React from 'react'
import buttonsData from './buttonsData'

const Button = () => {
  return(
    buttonsData.map(btn => <button className="button btn" id={btn.id}>{btn.value}</button>)
  )
}

export default Button