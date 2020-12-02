import React from 'react'

const Filter = ({ selectedFilter, updateFilter, theme }) => {
  const handleClick = (selected) => {

    updateFilter(selected)
  }
  return(
    <div className={`filter-wrapper ${theme}`}>
      <button 
        aria-label="All"
        value="all"
        className={`filter-option ${selectedFilter === 'all' ? 'selected' : ''} ${theme}`}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button 
        aria-label="Active"
        value="active"
        className={`filter-option ${selectedFilter === 'active' ? 'selected' : ''} ${theme}`}
        onClick={() => handleClick('active')}
      >
        Active
      </button>
      <button
        aria-label="Completed"
        value="completed"
        className={`filter-option ${selectedFilter === 'completed' ? 'selected' : ''} ${theme}`}
        onClick={() => handleClick('completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default Filter