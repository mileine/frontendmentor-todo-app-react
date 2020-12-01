import React, { useState } from 'react'

const Form = ({ theme, nextId, addItem }) => {
  const [text, setText] = useState('')
  const onSubmit = (evt) => {
    evt.preventDefault()
    const newValue = {
      "id": nextId,
      "text": text,
      "checked": false
    }
    addItem(newValue)
    setText('')
  }

  return (
    <form onSubmit={onSubmit}>
      <div className={`input-wrapper ${theme}`}>
        <div className={`item-check ${theme}`}></div>
        <input aria-label="Add new item" type="text" value={text} placeholder="Create a new todo..." onChange={ evt => setText(evt.target.value) }/>
      </div>
    </form>
  )
}

export default Form