import React, {Fragment} from 'react'

const Biography = (props) => {
  let firstName = props.quote.author.split(' ')
  return(
    <Fragment>
    <div>
      <a id='biography' href={props.quote.wiki} target='_blank' rel='noopener noreferrer' className='text-white'>
        <button type='button' className='btn btn-light p-2 m-2'>
          {firstName[0]}'s bio
        </button>
      </a>
    </div>
    <div>
    <a id='music' href={props.quote.music} target='_blank' rel='noopener noreferrer' className='text-white'>
      <button type='button' className='btn btn-danger p-2 m-2'>
        {firstName[0]}'s music
      </button>
    </a>
  </div>
  </Fragment>
  ) 
}

export default Biography