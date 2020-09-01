import React from 'react'

function Editor(props) {
  
  return(
   <React.Fragment>
      <h1 className="mb-3">Input</h1>
      <textarea id="editor" value={props.value} onChange={props.handleChange}></textarea>
   </React.Fragment>
  )
}

export default Editor