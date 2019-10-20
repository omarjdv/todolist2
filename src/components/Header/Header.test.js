import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Test Header component functionality', () => {

  let wrapper;
  let onAdd = jest.fn();

  beforeEach(() => {
    wrapper = mount(<Header onAdd={onAdd} />);
  })

  it('Should be one formulary', () => {
    expect(wrapper.find('form').length).toBe(1);
  });

  it('Should be one text input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('Should be one button', () => {
    expect(wrapper.find('button').length).toBe(1);
  });

  it('Should be click button', () => {
    const preventDefault = jest.fn();
    wrapper.find('form').simulate('submit', { preventDefault })
    expect(onAdd).toBeCalled();
    expect(preventDefault).toBeCalled();
  });

})


