import React from 'react';

const ItemList = ({ text }) => (
  <li
    className="list-group-item
      d-flex justify-content-between
      align-items-center">
      <div className="ItemList-text">
        {text}
      </div>
    <div
      className="btn-group"
      role="group"
      aria-label="Basic example">
        <button
          type="button"
          className="btn btn-light btn-sm">Delete
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm">Edit
        </button>
        <button
          type="button"
          className="btn btn-light btn-sm">Done
        </button>
    </div>
  </li>
);

export default ItemList;
