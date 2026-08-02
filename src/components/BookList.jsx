import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

function BookList(){
  const books = useSelector(state => state.books)

  if(!books.length) return (
    <div className="book-list">
      <p style={{padding:16}}>No books yet. Add one using the form.</p>
    </div>
  )

  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  )
}

export default BookList
