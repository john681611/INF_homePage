import React from 'react';
import { shallow } from 'enzyme';
import News from './';

describe('News', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <News
                news={[]}
            />
        );
    });

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render 1 section', () => {
        expect(wrapper.find('section').length).toEqual(1);
    });

    it('should render news items', () => {
        wrapper.setProps({
            news: [
                {
                    id: '21',
                    title: 'BREXIT',
                    date: '2019-09-29',
                    imagelink: 'https://iron-fists.co.uk/forums/images/ForumPics/op_insipience.png',
                    text: 'DOOM',
                    link: 'https://www.iron-fists.co.uk/forums/viewtopic.php?f=19&t=483'
                },
                {
                    id: '22',
                    title: 'EV',
                    date: '2019-09-23',
                    text: 'Sparky',
                    link: 'https://www.iron-fists.co.uk/forums/viewtopic.php?f=19&t=600',
                    event: true
                  }
            ]
        })
        const titles = wrapper.find('h3');
        expect(titles.length).toEqual(2);
        expect(titles.at(0).text()).toEqual('BREXIT');
        expect(titles.at(1).text()).toEqual('EV');

        const dates = wrapper.find('.date');
        expect(dates.length).toEqual(2);
        expect(dates.at(0).text()).toEqual('29-09-2019');
        expect(dates.at(1).text()).toEqual('23-09-2019');

        const img = wrapper.find('.newsimg');
        expect(img.length).toEqual(1);
        expect(img.at(0).prop('alt')).toEqual('BREXIT');
        expect(img.at(0).prop('data-src')).toEqual('https://iron-fists.co.uk/forums/images/ForumPics/op_insipience.png');

        const text = wrapper.find('.news-text');
        expect(text.length).toEqual(2);
        expect(text.at(0).text()).toEqual('DOOM');
        expect(text.at(1).text()).toEqual('Sparky');

        const btn = wrapper.find('.news-btn');
        expect(btn.length).toEqual(2);
        expect(btn.at(0).text()).toEqual('Read More');
        expect(btn.at(0).prop('href')).toEqual('https://www.iron-fists.co.uk/forums/viewtopic.php?f=19&t=483');
        expect(btn.at(1).text()).toEqual('Sign up');
        expect(btn.at(1).prop('href')).toEqual('https://www.iron-fists.co.uk/forums/viewtopic.php?f=19&t=600');

    });
});