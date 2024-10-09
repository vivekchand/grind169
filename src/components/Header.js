import React from 'react'

const Header = ({ completedCount, easyCount, mediumCount, hardCount, totalCount }) => {
  return (
    <div className='header'>
      <h1>GrindCode</h1>
      <div className="metrics">
        <p>Completed: {completedCount} / {totalCount}</p>
        <p>Easy: {easyCount} | Medium: {mediumCount} | Hard: {hardCount}</p>
      </div>
      <div className="motivation">
        <p>Keep going! You're making great progress. Every problem solved is a step towards mastery!</p>
      </div>
    </div>
  )
}

export default Header