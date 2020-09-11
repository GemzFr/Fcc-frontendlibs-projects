import React, {useState, useEffect} from 'react';
import './App.css';
import Display from './Display'
import DrumPad from './DrumPad';

const DrumMachine = () => {
  const [message, setMessage] = useState('Click the pads or press the corresponding key!')

  const handleKeyDown = (e) => {
    const audio = document.getElementById(String.fromCharCode(e.keyCode));
    if (audio) {
      setMessage('Hit that ' + audio.closest('div').id + '!');
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
      <Display infoText={message}/>
      <DrumPad/>
    </main>
  );
}

export default DrumMachine;