import React, {useState} from 'react'
import quotes from './quotes'
import Quote from './quote'
import NewQuote from './new-quote'
import Tweet from './tweet'
import Biography from './biography'

const Display = () => {
  const randomize = () => {return quotes[Math.floor(Math.random() * quotes.length)]}
  const [quote, setQuote] = useState(randomize)
  const handleChange = () => {setQuote(randomize)}

  return(
    <div id='wrapper' className='container d-flex flex-column justify-content-center'>
      <h1 className='text-center text-white mb-5'>Musicians' quotes</h1>
      <div id='quote-box' className='container d-flex flex-column'>
        <Quote quote={quote}/>
        <div id='button-box' className='container'>
          <Tweet/>
          <NewQuote handleChange={handleChange}/>
          <Biography quote={quote}/>
        </div>
      </div>
    </div>
  )
}

export default Display

