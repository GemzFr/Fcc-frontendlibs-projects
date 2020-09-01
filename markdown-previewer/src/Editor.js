import React from 'react'

function Editor(props) {
  return(
    <textarea id="editor" defaultValue={props.value}>
      
    </textarea>
  )
}

export default Editor