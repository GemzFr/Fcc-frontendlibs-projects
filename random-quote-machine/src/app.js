import React from 'react'
import quotes from './quotes'
import Quote from './quote'
import NewQuote from './new-quote'
import Tweet from './tweet'
import Biography from './biography'

export default class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: this.randomize()
    }
    this.handleChange = this.handleChange.bind(this)
  }
  randomize() {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
  handleChange() {
    this.setState({
      quote: this.randomize()
    })
  }
  render() {
    return(
      <div id='wrapper' className='container d-flex flex-column justify-content-center'>
        <h1 className='text-center text-white mb-5'>Musicians' quotes</h1>
        <div id='quote-box' className='container d-flex flex-column'>
          <Quote quote={this.state.quote}/>
          <div id='button-box' className='container'>
            <Tweet/>
            <NewQuote handleChange={this.handleChange}/>
            <Biography quote={this.state.quote}/>
          </div>
        </div>
      </div>
    )
  }
}


