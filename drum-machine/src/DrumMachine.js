import React, {useEffect} from 'react';
import './App.css';
import Display from './Display'

const DrumMachine = () => {
  const handleKeyDown = (e) => {
    const audio = document.getElementById(String.fromCharCode(e.keyCode));
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <main id='drum-machine' className='text-center container d-flex justify-content-center'>
      <Display/>
    </main>
  );
}

export default DrumMachine;
