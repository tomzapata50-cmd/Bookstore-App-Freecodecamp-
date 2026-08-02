import React from 'react'
import BookList from './components/BookList'
import AddBookForm from './components/AddBookForm'
import CategoriesFilter from './components/CategoriesFilter'

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Bookstore CMS</h1>
      </header>
      <main>
        <BookList />
        <div className="form-column">
          <CategoriesFilter />
          <AddBookForm />
        </div>
      </main>
      <footer>
        <p>Built for FreeCodeCamp project</p>
      </footer>
    </div>
  )
}

export default App
