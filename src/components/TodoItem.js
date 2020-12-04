import React, { useState } from 'react'
import { ReactComponent as CompleteIcon } from '../assets/images/icon-cross.svg'
import { Draggable } from 'react-beautiful-dnd'

const TodoItem = ({ index, id, checked, theme, updateItem, deleteItem, text }) => {
  const [completed, setCompleted] = useState(checked)
  
  const updateItemStatus = (id) => {
    updateItem(id)
    setCompleted(!completed)
  }

  const onKeyPress = (event, id) => {
    if (event.key === 'Enter') updateItem(id)
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
        onKeyPress={(event) => onKeyPress(event, id)}
      >
        <div className="description">
          <div className="item-check-wrapper" onClick={() => updateItemStatus(id)}>
            <div className={`item-check ${checked ? 'completed' : ''} ${theme}`}></div>
          </div>
          <span onClick={() => updateItemStatus(id)}>{text}</span>
        </div>
        <button aria-label="Delete Task" className={`complete-icon enabled ${theme}`} onClick={() => deleteItem(id)}>
          <CompleteIcon className={theme} />
        </button>
      </li>
      )}
     </Draggable>
  )
}

export default TodoItem