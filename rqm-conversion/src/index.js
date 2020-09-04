import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import Display from './app'

function App() {
  return(
    <div id="app">
      <Display/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById("root"))