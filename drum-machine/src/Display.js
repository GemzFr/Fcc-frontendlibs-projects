import React from 'react'

const Display = (props) => {
  return(
    <div id='display' className='d-flex flex-wrap'>
      <h3>{props.message}</h3>  
    </div>
  )
}

export default Display