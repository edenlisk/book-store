import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { createBook } from '../redux/book/book';
import '../style.css';

const Form = () => {
  const dispatch = useDispatch();

  const bookTitle = useRef();
  const bookAuthor = useRef();
  const categoryInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = bookTitle.current.value;
    const author = bookAuthor.current.value;
    const category = categoryInput.current.value;
    if (title && author && category) {
      const book = {
        id: nanoid(), title, author, category, progress: 0,
      };
      dispatch(createBook(book));
    }
    bookAuthor.current.value = '';
    bookTitle.current.value = '';
  };

  return (
    <div className="container py-3">
      <hr className="gray-bar" />
      <h3 className="text-muted ps-3">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="container d-flex gap-5 align-items-center">
        <input
          ref={bookTitle}
          type="text"
          placeholder="Book title"
          className="fs-5 bookInput border border-2 border-opacity-10"
        />
        <input
          ref={bookAuthor}
          type="text"
          placeholder="Book author"
          className="fs-5 bookInput border border-2 border-opacity-10"
        />
        <div className="d-flex gap-3 align-items-center">
          <select ref={categoryInput} className="form-select categories" defaultValue="categories">
            <option value="Fiction">Fiction</option>
            <option value="Action">Action</option>
            <option value="Science">Science</option>
          </select>
          <button type="submit" className="btn text-white add-book rounded-1 fw-bold">
            ADD
            BOOK
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
