import React from 'react';
import { shallow } from 'enzyme';
import SubscribeButton from '.';

describe('SubscribeButton', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SubscribeButton
      subKey="bob"
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 1 section', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });
});