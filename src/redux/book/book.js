import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { saveBook, getBooks, deleteBook } from '../fetchingData/fetchbook';

const ADD_BOOK = 'bookstore/books/ADD_BOOK_STATUS';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK_STATUS';
const INITIAL_BOOKS = 'bookstore/books/EXISTING_BOOKS_STATUS';
const INITIAL_STATE = [];

export const createBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await saveBook(book);
  return book;
});

export const retrieveBooks = createAsyncThunk(INITIAL_BOOKS, async () => {
  const response = await getBooks();
  const bookIds = await Object.keys(response);
  const allBooks = [];
  await bookIds.forEach((id) => {
    const [bk] = response[id];
    const { category, title, author } = bk;
    const singleBook = {
      id,
      category,
      title,
      author,
      progress: 0,
    };
    allBooks.push(singleBook);
  });
  return allBooks;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await deleteBook(id);
  return id;
});

const bookReducer = createReducer(INITIAL_STATE, ((builder) => {
  builder
    .addCase(createBook.fulfilled, ((state, action) => [...state, action.payload]))
    .addCase(retrieveBooks.fulfilled, ((state, action) => action.payload))
  // eslint-disable-next-line
      .addCase(removeBook.fulfilled, ((state, action) => [...state.filter((bk) => bk.id !== action.payload)]));
}));

export default bookReducer;
