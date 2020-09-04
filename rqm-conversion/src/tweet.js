import React from 'react'

export default function Tweet() {
  return(
    <div>
      <a id='tweet-quote' href='twitter.com/intent/tweet' target='_blank' className='text-white'>
        <button type='button' className='btn btn-primary p-2 m-2'>
          Tweet quote
        </button>
      </a>
    </div>
  )
}