import React from 'react';
import { shallow } from 'enzyme';
import ItemList from 'components/ItemList';

it('renders without crashing', () => {
  const text = "clean the house";
  const wrapper = shallow(<ItemList  text={text}/>);

  expect(wrapper.find('button').length).toBe(1);
  expect(wrapper.find('.ItemList-text').text()).toBe(text);


});

it('Functionality of function onDeleteItem', () => {
  const text = "Hello world";
  const id = 54;
  const onDelete = jest.fn();
  const wrapper = shallow(<ItemList  text={text} onDelete={onDelete} id={id} />);
  wrapper.find('button').simulate('click');
  expect(onDelete).toBeCalledWith(id);

});
