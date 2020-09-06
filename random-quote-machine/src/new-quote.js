import React from 'react'

const NewQuote = (props) => {
  return(
    <div>
      <button type='button 'id='new-quote' className='btn btn-secondary p-2 m-2' onClick={props.handleChange}>
        New quote
      </button>
    </div>
  )
}

export default NewQuote