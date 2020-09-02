import React from 'react';
import Editor from './Editor'
import Preview from './Preview'
import './App.css';
import Placeholder from './Placeholder'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: Placeholder
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {this.setState({input: e.target.value})};
  render() {
    return(
      <div className="App">
        <h1 className="welcome-bar">Markdown previewer project</h1>
        <div className="wrapper">
          <div className="cont">
            <Editor handleChange={this.handleChange} value={this.state.input}/>
          </div>
          <div className="cont-prev">
            <Preview toDisplay={this.state.input}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
