import React from 'react'

const TodoList = ({ theme, items, updateItem }) => {
  console.log(items)
  const renderedList = items.map((item, key) => {
    console.log(`item: ${item} | key: ${key}`)
    return (
      <li 
        className={`todo-item ${item.checked ? 'completed' : 'normal' } ${theme}`} 
        key={key} 
        checked={item.checked}
        onClick={() => updateItem(key)}>
        <div className={`item-check ${item.checked ? 'completed' : ''} ${theme}`}></div>
        {item.text}
      </li>
    )
  })
  return (
    <div className={`todo-list-container ${theme}`}>
      <ul>
        { renderedList}
      </ul>
    </div>
  )
}

export default TodoList