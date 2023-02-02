import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../style.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/book/book';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category, progress,
  } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="container my-3 px-5 border border-opacity-10 border-dark rounded-1 bg-light d-flex justify-content-between align-items-center flex-fill">
      <div className="bookInfo">
        <div className="py-3">
          <span className="text-muted">{category}</span>
          <h3 className="fw-bold">{title}</h3>
          <span className="author">{author}</span>
        </div>
        <div>
          <ul className="list-unstyled">
            <li className="list-inline-item"><button type="button" className="action border-0 bg-light">Comment</button></li>
            <li className="list-inline-item text-muted">|</li>
            <li className="list-inline-item"><button type="button" onClick={() => handleRemove(props)} className="action border-0 bg-light">Remove</button></li>
            <li className="list-inline-item text-muted">|</li>
            <li className="list-inline-item"><button type="button" className="action border-0 bg-light">Edit</button></li>
          </ul>
        </div>
      </div>
      <div className="align-items-center progressBar d-flex gap-2">
        <div>
          <CircularProgressbar value={progress} maxValue={1} styles={{ path: { stroke: 'rgb(2,144,255)' } }} />
        </div>
        <div className="d-flex flex-column text-center">
          <span className="fw-bold fs-3">
            {progress * 100}
            %
          </span>
          <p className="text-muted">Completed</p>
        </div>
      </div>
      <div>
        <div>
          <span className="text-muted fw-lighter">CURRENT CHAPTER</span>
          <p>Chapter 17</p>
        </div>
        <div>
          <button className="btn fw-lighter updateProgress text-white" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
