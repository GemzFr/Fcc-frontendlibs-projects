import React, {useEffect} from 'react';
import './App.css';
import Display from './Display'
import sounds from './sounds'

const DrumMachine = () => {
  return (
    <main id='drum-machine' className='text-center container d-flex justify-content-center'>
      <Display/>
    </main>
  );
}

export default DrumMachine;
