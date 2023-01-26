import React from 'react';

const Form = () => (
  <div className="container py-3">
    <hr style={{ height: '3px' }} />
    <h3 className="text-muted ps-3">ADD NEW BOOK</h3>
    <form className="container d-flex gap-5">
      <input
        type="text"
        placeholder="Book title"
        className="fs-5 bookInput border border-2 border-opacity-10"
        style={{ width: '38rem', height: '2.5rem', outline: 'none' }}
      />
      <div className="d-flex gap-3 align-items-center">
        <select className="form-select" placeholder="Categories" style={{ width: '15rem' }}>
          <option selected>Categories</option>
          <option>Action</option>
          <option>Science</option>
        </select>
        <button type="button" className="btn text-white rounded-1 fw-bold" style={{ backgroundColor: '#0290FF' }}>
          ADD
          BOOK
        </button>
      </div>
    </form>
  </div>
);

export default Form;
