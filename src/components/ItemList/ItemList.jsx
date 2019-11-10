import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const ItemList = ({ text, id, onDelete, onChange, completed }) => {
  const onDeleteItem = () => {
    onDelete(id);
  }

  const onChangeItem = () => {
    onChange(id);
  }

  return (
    <li
      className="list-group-item
      d-flex justify-content-between
      align-items-center">
      <div className="custom-control custom-switch">
        <input type="checkbox"
          className="custom-control-input"
          checked={completed}
          onChange={onChangeItem}
          id={id}/>
        <label
          className={`custom-control-label  ${completed ? 'text-decoration' : ''}`}
          htmlFor={id}
          >{text}
        </label>
      </div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic example">
        <button
          onClick= {onDeleteItem}
          type="button"
          className="btn btn-light btn-sm">Delete
        </button>
      </div>
    </li>
  );
}


ItemList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ItemList;
