import React from 'react';
import { shallow } from 'enzyme';
import Home from './components/Home';
import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  const msg = <h2>TodoList2</h2>;
  expect(wrapper.contains(msg)).toEqual(true);
  expect(wrapper.contains(<Home/>)).toEqual(true);
});
