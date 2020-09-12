import React from 'react'

const Display = (props) => {
  return(
    <div id='display' className='d-flex justify-content-center align-items-center p-3 mb-3 mt-5'>
      <h3>{props.message}</h3>  
    </div>
  )
}

export default Display