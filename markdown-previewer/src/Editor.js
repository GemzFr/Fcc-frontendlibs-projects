import React, {Fragment} from 'react'
import Placeholder from './Placeholder'

const Editor = (props) => {
  return(
   <Fragment>
      <h1 className="title">Input</h1>
      <textarea id="editor" defaultValue={Placeholder} onChange={props.handleChange}></textarea>
   </Fragment>
  )
}

export default Editor