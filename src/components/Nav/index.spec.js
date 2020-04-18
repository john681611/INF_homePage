import React from 'react';
import { shallow } from 'enzyme';
import Nav from '.';

describe('Nav', () => {
  let wrapper;


  global.navigator.serviceWorker = {
    ready: {
      then: jest.fn()
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Nav subKey={"boooo"}/>);
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a list of links and buttons', () => {
    expect(wrapper.find('li').length).toEqual(11);
    expect(wrapper.find('button').length).toEqual(2);
    expect(wrapper.find('button').at(0).text()).toEqual('Loading');
  });

  it('should expand dropdown when pressed', () => {
    expect(wrapper.find('.is-expanded').length).toEqual(0)
    wrapper.find('button').at(1).simulate('click')
    expect(wrapper.find('.is-expanded').length).toEqual(1)
  })
});