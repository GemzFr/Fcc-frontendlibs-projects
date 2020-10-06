import React from 'react'

const TypeWrap = (props) => {
  return(
    <section id={`${props.labelType}-label`} className='wrapper'>
      <label>{props.labelType.charAt(0).toUpperCase() + props.labelType.slice(1)}</label>
      <p id={`${props.labelType}-length`}>{props.timerType}</p>      
      <button type='button' id={`${props.labelType}-increment`} onClick={props.handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.354 8.854l5.792 5.792a.5.5 0 01-.353.854H6.207a.5.5 0 01-.353-.854l5.792-5.792a.5.5 0 01.708 0z"></path></svg>
      </button>
      <button type='button' id={`${props.labelType}-decrement`} onClick={props.handleClick}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M11.646 15.146L5.854 9.354a.5.5 0 01.353-.854h11.586a.5.5 0 01.353.854l-5.793 5.792a.5.5 0 01-.707 0z"></path></svg>
      </button>
    </section>
  )
}

export default TypeWrap