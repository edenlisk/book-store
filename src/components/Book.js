import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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
        <div style={{ width: '30%' }}>
          <div className="py-3">
            <span className="text-muted">Action</span>
            <h3 className="fw-bold">{title}</h3>
            <span className="" style={{ color: '#5aa8ee' }}>{author}</span>
          </div>
          <div>
            <ul className="list-unstyled">
              <li className="list-inline-item" style={{ color: '#5aa8ee' }}>Comments</li>
              <li className="list-inline-item text-muted">|</li>
              <li className="list-inline-item" style={{ color: '#5aa8ee' }}>Remove</li>
              <li className="list-inline-item text-muted">|</li>
              <li className="list-inline-item" style={{ color: '#5aa8ee' }}>Edit</li>
            </ul>
          </div>
        </div>
        <div style={{ width: 180, height: 180 }} className="align-items-center d-flex gap-2">
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
            <button className="btn fw-lighter text-white" style={{ backgroundColor: '#0290FF' }} type="button">UPDATE PROGRESS</button>
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
