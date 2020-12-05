import React, { useEffect, useState } from 'react'
import './styles/App.scss';
import Header from './components/Header'
import Form from './components/Form'
import Filter from './components/Filter'
import TodoList from './components/TodoList';
import todoList from './data/data.json'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [items, setItems] = useState(todoList)
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [nextId, setNextId] = useState(items.length + 2)

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light')
  }

  const addItem = (newItem) => {
    setItems(items => [...items, newItem])
    setNextId(nextId + 1)
  }

  const updateItem = (id) => {
    const newList = [...items]
    
    const editItem = newList.find((item => item.id === id))
    
    if (editItem) {
      editItem.checked = !editItem.checked 
    }

    setItems(newList)
  }

  const updateFilter = (selected) => {
    setSelectedFilter(selected)
  }

  const updateItems = (updatedList) => {
    setItems(updatedList)
  }

  const deleteItem = (id) => {
    const newList = [...items]
    setItems(newList.filter(item => item.id !== id))
  }

  const clearCompleted = () => {
    const itemsArray = [...items]
    setItems(itemsArray.filter(item => !item.checked))
  }

  return (
    <div className={`container ${theme}`}>
      <div className="main">
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Form nextId={nextId} theme={theme} addItem={addItem}/>
        <TodoList theme={theme} items={items} updateItem={updateItem} updateItems={updateItems} deleteItem={deleteItem} selectedFilter={selectedFilter} updateFilter={updateFilter} clearCompleted={clearCompleted}/>
        <div className="filter-mobile">
          <Filter selectedFilter={selectedFilter} updateFilter={updateFilter} theme={theme}/>
        </div>
        <span className={`dnd-info ${theme}`}>Drag and drop to reorder list</span>
      </div>      
    </div>
  );
}

export default App
