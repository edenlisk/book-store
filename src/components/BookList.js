import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveBooks } from '../redux/book/book';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveBooks());
  }, [dispatch]);
  const books = useSelector(((state) => state.book));
  return (
    <div>
      {books.map((bk) => (
          // eslint-disable-next-line
          <Book key={bk.id} id={bk.id} title={bk.title} author={bk.author} progress={bk.progress} category={bk.category} />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
