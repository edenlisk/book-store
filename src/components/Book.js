import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../style.css';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.value = 0.64;
  }

  render() {
    const { title, author } = this.props;
    return (
      <div className="container my-3 px-5 border border-opacity-10 border-dark rounded-1 bg-light d-flex justify-content-between align-items-center flex-fill">
        <div className="bookInfo">
          <div className="py-3">
            <span className="text-muted">Action</span>
            <h3 className="fw-bold">{title}</h3>
            <span className="author">{author}</span>
          </div>
          <div>
            <ul className="list-unstyled">
              <li className="list-inline-item action">Comments</li>
              <li className="list-inline-item text-muted">|</li>
              <li className="list-inline-item action">Remove</li>
              <li className="list-inline-item text-muted">|</li>
              <li className="list-inline-item action">Edit</li>
            </ul>
          </div>
        </div>
        <div className="align-items-center progressBar d-flex gap-2">
          <div>
            <CircularProgressbar value={this.value} maxValue={1} styles={{ path: { stroke: 'rgb(2,144,255)' } }} />
          </div>
          <div className="d-flex flex-column text-center">
            <span className="fw-bold fs-3">64%</span>
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
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
