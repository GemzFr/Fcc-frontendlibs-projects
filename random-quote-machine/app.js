const QUOTES = [
  {
    author: "John Petrucci",
    text: "Music is a communication. It's a two-way street. You need people to play to in order to make that connection complete. That's the way we look at it."
  },
  {
    author: "John Petrucci",
    text: "Chopin was a master of melody, harmony and voice leading - the art of smoothly moving from chord to chord."
  },
  {
    author: "John Petrucci",
    text: "I think it's really hard to describe music without alienating somebody."
  },
  {
    author: "Kirk Hammet",
    text:  "A life lived unexplored is a life not worth living." 
  },
  {
    author: "Kirk Hammet",
    text: "Metallica is a very complicated, fragile thing. On the outside, it's all metal, but on the inside it's very delicate."
  },
  {
    author: "Steven Wilson",
    text: "The city can be the loneliest place of all."
  },
  {
    author: "Steven Wilson",
    text: "The whole notion of an alternative truth is a paradox. How can you have an alternative to truth?"
  },
  {
    author: "Steven Wilson",
    text: "It's a cliche that music rises above it all, and it's a cliche for a reason - it's very often true."
  },
  {
    author: "Steven Wilson",
    text: "You forget, living outside of a country, that the actions of the government are not the actions of the people."
  },
  {
    author: "Greg Graffin",
    text: "Naturalism teaches one of the most important things in this world. There is only this life, so live wonderfully and meaningfully."
  },
  {
    author: "Greg Graffin",
    text: "Whether you reach a lot of people or have a profound impact on a few people, their memories of you are your afterlife."
  },
  {
    author: "Greg Graffin",
    text: "Unfortunately, science cannot be reduced to short, catchy phrases. And if this is all that the general public can comprehend, it's no wonder that we spend so much of our time in the interminable debate about belief in God, or lack thereof."
  },
  {
    author: "Greg Graffin",
    text: "We delude ourselves into believing that morality comes from somewhere else, whereas in reality we behave as we've been told to behave."
  },
  {
    author: "Zack de la Rocha",
    text: "I think every revolutionary act is an act of love. Every song that I've written, it is because of my desire to use music as a way to empower and re-humanize people who are living in a dehumanizing setting. The song is in order to better the human condition."
  },
  {
    author: "Jonathan Davis",
    text: "If you feel inside you are a woman, be a woman - no one can take that away from you, man. No one can make that feeling go away. If that's what you need to do to be complete, then no one has the right to tell you you can't do that."
  },
  {
    author: "Jonathan Davis",
    text: "A lot of people don't realize that depression is an illness. I don't wish it on anyone, but if they would know how it feels, I swear they would think twice before they just shrug it."
  },
  {
    author: "Nujabes",
    text: "Time can be generous, but ultimately time is indifferent. Time does not give two damns or a fuck"
  },
  {
    author: "Nujabes",
    text: "I fell free when the world doesn`t know to me."
  },
  {
    author: "Joe Acheson",
    text: "I think all the music that I've ever heard continually feeds into what I do – I think this is probably true of everyone. I often find the most original things even the best people are doing are the new ways they find of combining and reinterpreting their influences and pre-existing ideas. That's why it's easy to trace the gradual evolution of music over time, the roots and progressions of different styles."
  },
  {
    author: "Jan-Henrik Ohme",
    text: "In some ways it is a dream to make a living from the music but at the same time I think it is good that we live as normal lives as possible. I think it is a lot more interesting to hear the stories of someone in the same situation as me. It keeps the music as true as possible. Not making a living off this also leaves us great freedom, as we can make whatever we want without worrying about how commercially viable the music is."
  }
]

/* {
  author: "",
  text: ""
} */
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: this.randomize()
    }
    this.handleChange = this.handleChange.bind(this)
  }
  randomize() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)]
  }
  handleChange() {
    this.setState({
      quote: this.randomize()
    })
  }
  render() {
    return(
      <div id='quote-box'>
        <div className='container mb-3 mt-5'>
          <Quote quote={this.state.quote}/>
          <Tweet/>
        </div>
        <NewQuote handleChange={this.handleChange}/>
      </div>
    )
  }
}

function Quote(props){
  return(
    <blockquote className='container mb-0 shadow p-3 mb-5 bg-white rounded' id='quote-container'>
      <div id='text' className='mx-auto pr-5 pl-5 mb-1 mt-4 text-center font-italic'>
        {props.quote.text}
      </div>
      <div id='author' className='mx-auto pr-5 pl-5 text-center pb-4 mt-2'>
        {props.quote.author}  
      </div>
    </blockquote>
  )
}

function NewQuote(props) {
  return(
    <div className='d-flex justify-content-center'>
      <button type='button 'id='new-quote' className='btn btn-info' onClick={props.handleChange}>
      Get a new quote
      </button>
    </div>
  )
}

function Tweet() {
  return(
    <div className='d-flex justify-content-center mt-1 pb-1'>
      <button type='button' className='btn btn-primary'>
        <a id='tweet-quote' href='twitter.com/intent/tweet' className='text-white'>Share on Twitter</a>
      </button>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#main'))