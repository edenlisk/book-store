import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const BookList = () => {
  const books = useSelector(((state) => state.book));
  return (
    <div>
      {books.map((bk) => (
          // eslint-disable-next-line
          <Book key={bk.id} title={bk.title} author={bk.author} progress={bk.progress} category={bk.category} />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
