import React from 'react'

const Tweet = () => {
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

export default Tweet