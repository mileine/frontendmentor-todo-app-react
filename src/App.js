import React, { useState } from 'react'
import './styles/App.scss';

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light')
  }

  return (
    <div className={`container ${theme}`}>
      <div className="main">
        <h1 className="title">TODO</h1>
      </div>      
    </div>
  );
}

export default App
