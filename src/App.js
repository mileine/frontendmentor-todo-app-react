import React, { useState } from 'react'
import './styles/App.scss';
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList';
import todoList from './data/data.json'

const App = () => {
  const [theme, setTheme] = useState('light')
  const [items, setItems] = useState(todoList)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light')
  }

  const addItem = (newItem) => {
    
    setItems(items => [...items, newItem])
    
  }

  const updateItem = (key) => {
    const newList = [...items]
    console.log(newList)
    newList[key].checked = !newList[key].checked
    setItems(newList)
  }

  const updateFilter = (selected) => {
    console.log(`antes: ${selectedFilter}`)
    setSelectedFilter(selected)
    console.log(`depois: ${selectedFilter}`)
  }

  const clearCompleted = () => {
    const itemsArray = [...items]
    setItems(itemsArray.filter(item => !item.checked))
  }

  return (
    <div className={`container ${theme}`}>
      <div className="main">
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Form theme={theme} addItem={addItem}/>
        <TodoList theme={theme} items={items} updateItem={updateItem} selectedFilter={selectedFilter} updateFilter={updateFilter} clearCompleted={clearCompleted}/>
      </div>      
    </div>
  );
}

export default App
