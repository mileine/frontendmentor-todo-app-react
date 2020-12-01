import React from 'react'
import Filter from './Filter'
import TodoItem from './TodoItem'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const TodoList = ({ theme, items, updateItem, selectedFilter, updateFilter, updateItems, clearCompleted }) => {
  
  const renderedList = items.map(({id, text, checked}, index) => {
    return (
      <TodoItem key={id} index={index} id={id} theme={theme} updateItem={updateItem} checked={checked} text={text}/>
    )
  })

  const renderedListActive = items.map(({id, text, checked}, index) => {
    if (checked) return ''
    return (
      <TodoItem key={id} index={index} id={id} theme={theme} updateItem={updateItem} checked={checked} text={text}/>
    )
  })

  const renderedListCompleted = items.map(({id, text, checked}, index) => {
    if (!checked) return ''
    return (
      <TodoItem key={id} index={index} id={id} theme={theme} updateItem={updateItem} checked={checked} text={text}/>
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

  const handleOnDragEnd = (result) => {
    const updatedList = Array.from(items)
    const [reorderedItem] = updatedList.splice(result.source.index, 1)
    updatedList.splice(result.destination.index, 0, reorderedItem)
    updateItems(updatedList)
  }

  return (
    <div className={`todo-list-wrapper ${theme}`}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul className="list" {...provided.droppableProp} ref={provided.innerRef}>
              { renderedFilteredList() }
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
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