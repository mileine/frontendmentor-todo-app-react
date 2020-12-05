import React, { useState } from 'react'

const Form = ({ nextId, addItem }) => {
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
      <div className={`input-wrapper`}>
        <button aria-label="Add new item" type="submit" className={`input-check`}></button>
        <input aria-label="Create a new todo..." type="text" value={text} placeholder="Create a new todo..." onChange={ evt => setText(evt.target.value) }/>
      </div>
    </form>
  )
}

export default Form