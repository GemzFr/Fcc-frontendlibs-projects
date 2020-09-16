import React from 'react';
import DisplayBox from './DisplayBox'
import './App.css';

function App() {
  return (
    <div className="App container d-flex flex-column align-items-center justify-content-center">
      <header>
        <h2>Enter your formula:</h2>
      </header>
      <main className="calculator container">
        <DisplayBox/>
      </main>
    </div>
  );
}

export default App;
