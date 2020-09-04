import React from 'react'

export default function Quote(props){
  return(
    <blockquote id='quote-container' className='container pt-3 pb-3'>
      <div id='text' className='text-center font-italic'>
        {props.quote.text}
      </div>
      <div id='author' className='text-center'>
        {props.quote.author}  
      </div>
    </blockquote>
  )
}