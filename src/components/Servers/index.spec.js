import React from 'react';
import { shallow } from 'enzyme';
import Servers from './';

describe('Servers', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Servers
      servers={[]}
      />
    );
  });

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render 1 section', () => {
    expect(wrapper.find('section').length).toEqual(1);
  });

  it('should render each server name and url', () => {
    wrapper.setProps({ servers: [{
        name: 'Alpha',
        info: {link: 'bla', src: 'meh'},
        mods:{},
        file: true,
        id: '1'
    },
    {
        name: 'Bravo',
        info: {link: 'pah', src: 'beh'},
        mods: {}
    }
    ]});
    const name = wrapper.find('h3');
    expect(name.length).toEqual(2);
    expect(name.at(0).text()).toEqual('Alpha');
    expect(name.at(1).text()).toEqual('Bravo');

    const link = wrapper.find('.postlink');
    expect(link.length).toEqual(2);
    expect(link.at(0).prop('href')).toEqual('bla');
    expect(link.at(1).prop('href')).toEqual('pah');

    const image = wrapper.find('.lazyload');
    expect(image.length).toEqual(2);
    expect(image.at(0).prop('data-src')).toEqual('meh');
    expect(image.at(1).prop('data-src')).toEqual('beh');

    const file = wrapper.find('.btn');
    expect(file.length).toEqual(1);
    expect(file.at(0).prop('href')).toEqual('https://ironfists.azurewebsites.net/modlist/1');
    expect(file.at(0).prop('download')).toEqual('INF_Alpha_preset.html')
  });

  it('should render mandatory and optional mods for each group', () => {
    wrapper.setProps({ servers: [{
        name: 'Alpha',
        info: {link: 'bla', src: 'meh'},
        mods:{
            required: [{steamID: 1234, name:'Bob'}],
            optional: [{steamID: 4567, name:'sid'}]
        }
    }]});
    const name = wrapper.find('h4');
    expect(name.length).toEqual(2);
    expect(name.at(0).text()).toEqual('required');
    expect(name.at(1).text()).toEqual('optional');

    const modeName = wrapper.find('.mod');
    expect(modeName.length).toEqual(2);
    expect(modeName.at(0).text()).toEqual('Bob');
    expect(modeName.at(0).prop('href')).toEqual('https://steamcommunity.com/sharedfiles/filedetails/?id=1234');
    expect(modeName.at(1).text()).toEqual('sid');
    expect(modeName.at(1).prop('href')).toEqual('https://steamcommunity.com/sharedfiles/filedetails/?id=4567');

  });
});