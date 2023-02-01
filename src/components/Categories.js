import React from 'react';
import '../style.css';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.category);
  const returnStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="py-3 text-center">
      <button type="button" onClick={() => returnStatus()} className="btn text-white check-progress">CHECK STATUS</button>
      <h1>{status}</h1>
    </div>
  );
};

export default Categories;
