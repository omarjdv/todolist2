import React from 'react';
import ItemList from 'components/ItemList';

const List = ({ items }) => (
  <ul className="list-group">
    {items.map(e => <ItemList key={e.id }id={e.id} text={e.text}/>)}
  </ul>
);

export default List;

