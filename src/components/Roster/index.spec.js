import React from 'react';
import { shallow } from 'enzyme';
import Roster from './';

describe('Roster', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Roster
      members={[]}
      squads={[]}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 1 section', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });

  it('should render Squad Sub sections', () => {
    wrapper.setProps({ squads: [{
        name: 'Alpha'
    },
    {
        name: 'Bravo'
    }
    ], members: [] });
    const squad = wrapper.find('h3');
    expect(squad.length).toEqual(2);
    expect(squad.at(0).text()).toEqual('Alpha');
    expect(squad.at(1).text()).toEqual('Bravo');
  });

  it('should render one Squad and 2 members', () => {
    wrapper.setProps({ squads: [{
        name: 'Alpha'
    }
    ], members: [
        {
            position: 'Alpha 1',
            name: 'Bob',
            nickname: 'BobKey',
            remark: 'My hovercraft Is full of eels',
            role: 'Janitor',
            joined: 2018
        },
        {
            position: 'Alpha 2',
            nickname: 'Sid',
            remark: 'My hovercraft Is full of frogs',
            role: 'Basket Weaver',
            joined: 2019
        }
    ]});

    const names = wrapper.find('.member-name');
    expect(names.length).toEqual(2);
    expect(names.at(0).text()).toEqual('Bob');
    expect(names.at(1).text()).toEqual('Sid');

    const remarks = wrapper.find('.member-remark');
    expect(remarks.length).toEqual(2);
    expect(remarks.at(0).text()).toEqual('My hovercraft Is full of eels');
    expect(remarks.at(1).text()).toEqual('My hovercraft Is full of frogs');

    const position = wrapper.find('.member-position');
    expect(position.length).toEqual(2);
    expect(position.at(0).text()).toEqual('Alpha 1');
    expect(position.at(1).text()).toEqual('Alpha 2');

    const role = wrapper.find('.member-role');
    expect(role.length).toEqual(2);
    expect(role.at(0).text()).toEqual('Janitor');
    expect(role.at(1).text()).toEqual('Basket Weaver');

    const joined = wrapper.find('.member-joined');
    expect(joined.length).toEqual(2);
    expect(joined.at(0).text()).toEqual("2018");
    expect(joined.at(1).text()).toEqual("2019");
  });
});