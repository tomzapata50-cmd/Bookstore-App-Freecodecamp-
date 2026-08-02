import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBook } from '../features/books/booksSlice'

function Book({book}){
  const dispatch = useDispatch()
  const handleRemove = () => dispatch(removeBook(book.id))

  return (
    <div className="book">
      <div className="info">
        <div className="title">{book.title}</div>
        <div className="author">{book.author} — <span style={{color:'#0a58ca'}}>{book.category}</span></div>
      </div>
      <div className="controls">
        <button className="btn ghost" onClick={() => {}}>Comments</button>
        <button className="btn" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  )
}

export default Book
