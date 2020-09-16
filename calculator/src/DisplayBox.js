import React from 'react'
import Button from './Button'

const DisplayBox = () => {
  return(
    <div className="display-wrapper container d-flex flex-row flex-wrap align-items-center justify-content-center">
      <div className="formula">16545</div>
      <div id="display" className="display">654564564</div>
      <Button/>
    </div>
  )
}

export default DisplayBox