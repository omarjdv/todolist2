import React from 'react';
import { shallow } from 'enzyme';
import ItemList from 'components/ItemList';
import List from './List';

describe('test of ItemList component', () => {

  let items;
  let wrapper;

  beforeEach(() => {
    items = [
      {
        text: 'text 1',
        id: 12,
      },
      {
        text: 'text 2',
        id: 3,
      }
    ];
    wrapper = shallow(<List  items={items}/>);
  });

  it('should render one ul element', () => {
    const ul = wrapper.find('ul');
    expect(ul.length).toBe(1);
  });

  it('should render contains ItemList Component', () => {
    const text = 'Hello';
    expect(wrapper.contains(<ItemList text={text}/>));
  });


  it('should render ul contains two ItemList Component', () => {
    const ul = wrapper.find('ul');
    expect(ul.length).toBe(1);
    expect(ul.find(ItemList).length).toBe(2);
  });


});

