import React from 'react'
import sounds from './sounds'

const DrumPad = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const audio = e.target.closest('div').firstChild;
    audio.currentTime = 0;
    audio.play();
  }

  return( 
    sounds.map((sound) =>
      <div key={sound.id} className='wrapper m-1'>
        <div id={sound.id} className='drum-pad border border-dark rounded d-flex flex-column justify-content-center' onClick={handleClick}>
          <audio id={sound.keyTrigger} src={sound.url} className='clip'></audio>
          {sound.keyTrigger}
        </div>
        <p className='description border border-dark rounded d-flex flex-column justify-content-center'>{sound.id.toUpperCase()}</p>
      </div>
    )
  )
}

export default DrumPad

