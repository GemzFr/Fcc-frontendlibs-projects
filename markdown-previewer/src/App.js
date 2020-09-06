import React, {useState} from 'react';
import Editor from './Editor'
import Preview from './Preview'
import './App.css';
import Placeholder from './Placeholder'

const App = () => {
  const [input, setInput] = useState(Placeholder);
  const handleChange = (e) => {setInput(e.target.value)};
 
  return(
    <div className="App">
      <h1 className="welcome-bar">Markdown previewer project</h1>
      <div className="wrapper">
        <div className="cont">
          <Editor handleChange={handleChange} value={input}/>
        </div>
        <div className="cont-prev">
          <Preview toDisplay={input}/>
        </div>
      </div>
    </div>
  )
}

export default App;
