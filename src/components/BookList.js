import React from 'react';
import Book from './Book';
import Form from './Form';

const BookList = () => (
  <>
    <Book title="The Hunger Games" author="Suzanne Collins" />
    <Book title="Dune" author="Frank Herbert" />
    <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
    <Form />
  </>
);

export default BookList;
