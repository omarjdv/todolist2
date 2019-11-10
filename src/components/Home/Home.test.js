import React from 'react';
import { shallow } from 'enzyme';
import Header from 'components/Header';
import List from 'components/List';
import Home from './Home';


describe('Test the Home component functionality', () => {


  it('renders without crashing', () => {
    const wrapper = shallow(<Home/>);
    const div = wrapper.find('div');
    expect(div.length).toBe(1);
    expect(div.find(Header).length).toBe(1);
    expect(div.find(List).length).toBe(1);

  });

  it('shold change the state correctly', () => {
    const wrapper = shallow(<Home/>);
    const instance = wrapper.instance();
    expect(instance.state.items.length).toBe(0);
    instance.onAdd('text 1');
    expect(instance.state.items.length).toBe(1);


  });

  it('shold eliminated the state correctly', () => {
    const wrapper = shallow(<Home/>);
    const instance = wrapper.instance();
    expect(instance.state.items.length).toBe(0);
    instance.onAdd('text 1');
    expect(instance.state.items.length).toBe(1);
    instance.onDelete(1);
    expect(instance.state.items.length).toBe(0);


  });

});

