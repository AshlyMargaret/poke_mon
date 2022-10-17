import React from 'react'
import './Pagination.css'

function Pagination({gotoNextPage,gotoPreviousPage}) {
  return (
    <div className='pagination'>
      {gotoPreviousPage && <button onClick={gotoPreviousPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
      
    </div>
  )
}

export default Pagination