class App extends React.Component {
  render() {
    return(
      <div id='quote-box'>
        <Text/>
        <Author/>
        <NewQuote/>
        <Tweet/>
      </div>
    )
  }
}

class Text extends React.Component {
  render() {
    return(
      <div id='text'>

      </div>
    )
  }
} 

class Author extends React.Component {
  render() {
    return(
      <div id='author'>

      </div>
    )
  }
}

class NewQuote extends React.Component {
  render() {
    return(
      <button id='new-quote'>

      </button>
    )
  }
}

class Tweet extends React.Component  {
  render() {
    return(
      <a id='tweet-quote'>

      </a>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#main'))