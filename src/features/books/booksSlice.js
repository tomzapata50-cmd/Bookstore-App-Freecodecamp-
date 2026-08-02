import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare({ title, author, category }) {
        return { payload: { id: nanoid(), title, author, category } }
      }
    },
    removeBook(state, action) {
      return state.filter(book => book.id !== action.payload)
    }
  }
})

export const { addBook, removeBook } = booksSlice.actions
export default booksSlice.reducer
