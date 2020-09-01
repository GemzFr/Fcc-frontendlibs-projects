import React from 'react';
import Editor from './Editor'
import Preview from './Preview'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "Enter your text to be converted here"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {this.setState({input: e.target.value})};
  render() {
    return(
      <div className="App">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <Editor handleChange={this.handleChange} value={this.state.input}/>
            </div>
            <div className="col-md-6">
              <Preview toDisplay={this.state.input}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
