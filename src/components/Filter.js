import React from 'react'

const Filter = ({ selectedFilter, updateFilter, theme }) => {
  const handleClick = (selected) => {

    updateFilter(selected)
  }
  return(
    <div className="filter-wrapper">
      <button 
        value="all"
        className={`filter-option ${selectedFilter === 'all' ? 'selected' : ''} ${theme}`}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button 
        value="active"
        className={`filter-option ${selectedFilter === 'active' ? 'selected' : ''} ${theme}`}
        onClick={() => handleClick('active')}
      >
        Active
      </button>
      <button 
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