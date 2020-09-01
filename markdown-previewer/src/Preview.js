import React from 'react'
let marked = require('marked')

function Preview(props) {
  return(
    <React.Fragment>
      <h1 className="mb-3">Preview</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.toDisplay)}}>
      </div>
    </React.Fragment>
  )
}

export default Preview