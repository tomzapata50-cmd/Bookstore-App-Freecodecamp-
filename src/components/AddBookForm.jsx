import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../features/books/booksSlice'

const categories = ['Fiction','Nonfiction','Sci-Fi','Biography','Technology','History']

function AddBookForm(){
  const dispatch = useDispatch()
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [category,setCategory] = useState(categories[0])

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!title.trim() || !author.trim()) return
    dispatch(addBook({title: title.trim(), author: author.trim(), category}))
    setTitle('')
    setAuthor('')
    setCategory(categories[0])
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add New Book</h3>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Book title" />
      <input value={author} onChange={e=>setAuthor(e.target.value)} placeholder="Author" />
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button className="btn" type="submit">Add Book</button>
    </form>
  )
}

export default AddBookForm
