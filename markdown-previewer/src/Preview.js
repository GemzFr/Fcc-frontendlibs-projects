import React, {Fragment} from 'react'
let marked = require('marked')
marked.setOptions({
  breaks: true,
});

const Preview = (props) => {
  return(
    <Fragment>
      <h1 className="title">Preview</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.toDisplay)}}>
      </div>
    </Fragment>
  )
}

export default Preview