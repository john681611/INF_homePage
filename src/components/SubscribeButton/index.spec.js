import React from 'react';
import { shallow } from 'enzyme';
import Donations from '.';

describe('Donations', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Donations
      donators={[]}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 1 section', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });

  it('should list out donator names', () => {
    wrapper.setProps({donators: [{name: 'bob'}, {name: 'sid'}]});
    const names = wrapper.find('li');
    expect(names.length).toEqual(2);
    expect(names.at(0).text()).toEqual('bob');
    expect(names.at(1).text()).toEqual('sid');
  })
});