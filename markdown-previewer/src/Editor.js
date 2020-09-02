import React from 'react'
import Placeholder from './Placeholder'

function Editor(props) {
  
  return(
   <React.Fragment>
      <h1 className="title">Input</h1>
      <textarea id="editor" defaultValue={Placeholder} onChange={props.handleChange}></textarea>
   </React.Fragment>
  )
}

export default Editor