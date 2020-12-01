import React, { useState } from 'react'
import { ReactComponent as CompleteIcon } from '../assets/images/icon-cross.svg'
import { Draggable } from 'react-beautiful-dnd'

const TodoItem = ({ index, id, checked, theme, updateItem, text }) => {
  const [completed, setCompleted] = useState(checked)
  
  const updateItemStatus = (id) => {
    updateItem(id)
    setCompleted(!completed)
  }

  return (
    <Draggable key={id} draggableId={id.toString()} index={index}>
      {(provided) => (
      <li 
        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} 
        className={`todo-item ${checked ? 'completed' : 'normal' } ${theme}`} 
        id={id} 
        key={id}
        checked={checked}
        onClick={() => updateItemStatus(id)}
      >
        <div className="description">
          <div className={`item-check ${checked ? 'completed' : ''} ${theme}`}></div>
          <span>{text}</span>
        </div>
        <CompleteIcon className={`complete-icon ${completed ? 'disabled' : 'enabled'} ${theme}`} />
      </li>
      )}
     </Draggable>
  )
}

export default TodoItem