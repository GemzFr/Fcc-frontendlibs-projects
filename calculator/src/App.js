import React from 'react';
import Calculator from './Calculator'
import './App.css';

function App() {
  return (
    <div className="App container d-flex flex-column align-items-center justify-content-center">
      <header>
        <h2>Enter your formula:</h2>
      </header>
      <main className="calculator container">
        <Calculator/>
      </main>
    </div>
  );
}

export default App;
