import React from 'react'
let marked = require('marked')
marked.setOptions({
  breaks: true,
});

function Preview(props) {
  return(
    <React.Fragment>
      <h1 className="title">Preview</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.toDisplay)}}>
      </div>
    </React.Fragment>
  )
}

export default Preview