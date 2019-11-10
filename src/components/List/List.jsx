import React from 'react';
import ItemList from 'components/ItemList';
import PropTypes from 'prop-types';


const List = ({ items, onDelete, onCompleted, onChange }) => (
  <ul className="list-group">
    {items.map(e => <ItemList
                      onChange={onChange}
                      onCompleted={onCompleted}
                      onDelete={onDelete}
                      completed={e.completed}
                      key={e.id}
                      id={e.id}
                      text={e.text}
                    />)}
  </ul>
);

List.propTypes = {
  items: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default List;

