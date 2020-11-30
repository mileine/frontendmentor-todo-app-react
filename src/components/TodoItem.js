import React, { useState } from 'react'
import { ReactComponent as CompleteIcon } from '../assets/images/icon-cross.svg'

const TodoItem = ({ id, checked, theme, updateItem, text }) => {
  const [completed, setCompleted] = useState(checked)
  
  const updateItemStatus = (id) => {
    updateItem(id)
    setCompleted(!completed)
  }

  return (
    <li 
      className={`todo-item ${checked ? 'completed' : 'normal' } ${theme}`} 
      id={id} 
      checked={checked}
      onClick={() => updateItemStatus(id)}
    >
      <div className="description">
        <div className={`item-check ${checked ? 'completed' : ''} ${theme}`}></div>
        <span>{text}</span>
      </div>
      <CompleteIcon className={`complete-icon ${completed ? 'disabled' : 'enabled'} ${theme}`} />
   </li>
  )
}

export default TodoItem