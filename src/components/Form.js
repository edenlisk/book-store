import React from 'react';
import '../style.css';

const Form = () => (
  <div className="container py-3">
    <hr className="gray-bar" />
    <h3 className="text-muted ps-3">ADD NEW BOOK</h3>
    <form className="container d-flex gap-5 align-items-center">
      <input
        type="text"
        placeholder="Book title"
        className="fs-5 bookInput border border-2 border-opacity-10"
      />
      <input
        type="text"
        placeholder="Book author"
        className="fs-5 bookInput border border-2 border-opacity-10"
      />
      <div className="d-flex gap-3 align-items-center">
        <select className="form-select categories" defaultValue="categories">
          <option>Categories</option>
          <option value="2">Action</option>
          <option value="3">Science</option>
        </select>
        <button type="button" className="btn text-white add-book rounded-1 fw-bold">
          ADD
          BOOK
        </button>
      </div>
    </form>
  </div>
);

export default Form;
