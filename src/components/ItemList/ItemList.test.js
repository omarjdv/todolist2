import React from 'react';
import { shallow } from 'enzyme';
import ItemList from 'components/ItemList';

it('renders without crashing', () => {
  const text = "clean the house";
  const wrapper = shallow(<ItemList  text={text}/>);

  expect(wrapper.find('button').length).toBe(3);
  expect(wrapper.find('.ItemList-text').text()).toBe(text);

});
