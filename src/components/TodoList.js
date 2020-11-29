import React from 'react'
import Filter from './Filter'

const TodoList = ({ theme, items, updateItem, selectedFilter, updateFilter }) => {
  
  const renderedList = items.map((item, key) => {
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

  const renderedListActive = items.map((item, key) => {
    if (item.checked) return ''
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

  const renderedListCompleted = items.map((item, key) => {
    if (!item.checked) return ''
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

  const renderedFilteredList = () => {
    if (selectedFilter === 'active') return renderedListActive
    else if (selectedFilter === 'completed') return renderedListCompleted
    else return renderedList
  }

  const getItemsLeft = () => {
    let completedItems = 0
    let total = items.length
    items.map((item, key) => {
      if (item.checked) completedItems++
    })
    return total - completedItems
  }

  return (
    <div className={`todo-list-wrapper ${theme}`}>
      <ul>
        { renderedFilteredList() }
      </ul>
      <div className="todo-list-footer">
        <span>{ getItemsLeft() } items left</span>
        <Filter selectedFilter={selectedFilter} updateFilter={updateFilter}/>
        <a>Clear Completed</a>
      </div>
    </div>
  )
}

export default TodoList