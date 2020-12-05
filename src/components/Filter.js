import React from 'react'

const Filter = ({ selectedFilter, updateFilter }) => {
  const handleClick = (selected) => {

    updateFilter(selected)
  }
  return(
    <div className={`filter-wrapper`}>
      <button 
        aria-label="All"
        value="all"
        className={`filter-option ${selectedFilter === 'all' ? 'selected' : ''}`}
        onClick={() => handleClick('all')}
      >
        All
      </button>
      <button 
        aria-label="Active"
        value="active"
        className={`filter-option ${selectedFilter === 'active' ? 'selected' : ''}`}
        onClick={() => handleClick('active')}
      >
        Active
      </button>
      <button
        aria-label="Completed"
        value="completed"
        className={`filter-option ${selectedFilter === 'completed' ? 'selected' : ''}`}
        onClick={() => handleClick('completed')}
      >
        Completed
      </button>
    </div>
  )
}

export default Filter