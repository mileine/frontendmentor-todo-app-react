import React, { useState } from 'react'

const Form = ({ theme, addItem }) => {
  const [text, setText] = useState('')
  const onSubmit = (evt) => {
    evt.preventDefault()
    const newValue = {
      "text": text,
      "checked": false
    }
    addItem(newValue)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={`input-container ${theme}`}>
        <div className={`item-check ${theme}`}></div>
        <input type="text" value={text} placeholder="Create a new todo..." onChange={ evt => setText(evt.target.value) }/>
      </div>
    </form>
  )
}

export default Form