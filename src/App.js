import React, { useState } from 'react'
import './styles/App.scss';
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList';

const App = () => {
  const [theme, setTheme] = useState('light')
  const [items, setItems] = useState([])

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light')
  }

  const addItem = (newItem) => {
    
    setItems(items => [...items, newItem])
    console.log(items)
  }

  const updateItem = (key) => {
    const newList = [...items]
    newList[key].checked = !newList[key].checked
    setItems(newList)
  }

  return (
    <div className={`container ${theme}`}>
      <div className="main">
        <Header theme={theme} toggleTheme={toggleTheme}/>
        <Form theme={theme} addItem={addItem}/>
        <TodoList theme={theme} items={items} updateItem={updateItem}/>
      </div>      
    </div>
  );
}

export default App
