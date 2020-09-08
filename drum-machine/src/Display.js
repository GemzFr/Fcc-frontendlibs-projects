import React from 'react'
import DrumPad from './DrumPad'

const Display = () => {
  return(
    <div id='display' className='container w-50'>
      <div className='row justify-content-center'>
        <DrumPad />
      </div>
    </div>
  )
}

export default Display