import React from 'react'
import sounds from './sounds'

const DrumPad = () => {
  const handleClick = (e) => {
    const audio = e.target.closest('div').firstChild;
    e.preventDefault();
    audio.play();
  }

  return( //rewrite code structure to pass tests, add playing sound function on key trigger
    sounds.map((sound) =>
      <div key={sound.id} className='col-4 pad-container container d-flex flex-column justify-content-center align-items-end'>
        <audio id={sound.keyTrigger} src={sound.url} className='clip'></audio>
        <button id={sound.keyTrigger} type='button' className='drum-pad border border-dark w-100 btn btn-info' onClick={handleClick}>
          {sound.keyTrigger}
        </button>
        <p className='description border border-dark rounded mb-4 p-2 w-100'>{sound.id.toUpperCase()}</p>
      </div>
    )
  )
}

export default DrumPad
