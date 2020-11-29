import React, { useState } from 'react'
import './styles/App.scss';
import Header from './components/Header'

const App = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light')
  }

  return (
    <div className={`container ${theme}`}>
      <div className="main">
        <Header theme={theme} toggleTheme={toggleTheme}/>
      </div>      
    </div>
  );
}

export default App
