import React from 'react'
import Filter from './Filter'
import TodoItem from './TodoItem'
import { DragDropContext } from 'react-beautiful-dnd'

const TodoList = ({ theme, items, updateItem, selectedFilter, updateFilter, clearCompleted }) => {
  
  const renderedList = items.map((item, id) => {
    return (
      <TodoItem key={id} id={id} theme={theme} updateItem={updateItem} checked={item.checked} text={item.text}/>
    )
  })

  const renderedListActive = items.map((item, id) => {
    if (item.checked) return ''
    return (
      <TodoItem key={id} id={id} theme={theme} updateItem={updateItem} checked={item.checked} text={item.text}/>
    )
  })

  const renderedListCompleted = items.map((item, id) => {
    if (!item.checked) return ''
    return (
      <TodoItem key={id} id={id} theme={theme} updateItem={updateItem} checked={item.checked} text={item.text}/>
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
    completedItems = items.filter(item => item.checked).length
    return total - completedItems
  }

  return (
    <div className={`todo-list-wrapper ${theme}`}>
      <DragDropContext>
        <ul>
          { renderedFilteredList() }
        </ul>
      </DragDropContext>
      <div className="todo-list-footer">
        <span className="items-left">{ getItemsLeft() } items left</span>
        <Filter selectedFilter={selectedFilter} updateFilter={updateFilter} theme={theme}/>
        <button aria-label="Clear Completed" className={`btn-clear ${theme}`} onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </div>
  )
}

export default TodoList