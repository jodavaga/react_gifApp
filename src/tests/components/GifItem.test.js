import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifItem } from '../../components/GifItem';

describe('<GifItem /> tests', () => {

    const title = 'EL titulo';
    const url = 'https://localhost/some.gif';
    let wrapper = shallow(<GifItem title={ title } url={ url } />);

    beforeEach(() => {

        wrapper = shallow(<GifItem title={ title } url={ url } />);
    });


    test('Should render component', () => {

        expect(wrapper.find('img').length).toBe(1);
        expect(wrapper).toMatchSnapshot();
    });

    test('Should render component with <p> con titulo', () => {

        expect( wrapper.find('p').text().trim() ).toBe(title);
    });

    test('<img /> should have src and alt attributes equal to props', () => {

        // console.log( wrapper.find('img').html() );
        // const imgProps = wrapper.find('img').props();
        const src = wrapper.find('img').prop('src');

        expect( src ).toBe(url);
        expect( wrapper.find('img').prop('alt') ).toBe( title );
    });

    test('should have a className of: card', () => {
        const divClass = wrapper.find('div').prop('className');

        // console.log(divClass);
        expect( divClass ).toContain('card');
        expect( wrapper.find('.card').prop('className').includes('animate__animated') ).toBe(true);
    })
})