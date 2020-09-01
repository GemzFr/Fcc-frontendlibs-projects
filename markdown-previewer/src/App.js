import React from 'react';
import Editor from './Editor'
import Preview from './Preview'
import './App.css';

const Placeholder = "Some testing text"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: Placeholder
    }
  }
  render() {
    return(
      <div className="App">
      <Editor value={this.state.input}/>
      <Preview value={this.state.input}/>
    </div>
    )
  }
}

export default App;
