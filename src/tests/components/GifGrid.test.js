import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifGrid } from '../../components/GifGrid';
import { useGifFetch } from '../../hooks/useGifFetch';
// mock call
jest.mock( '../../hooks/useGifFetch' );

describe('<GifGrid /> tests', () => {
    const category = 'rick and morty';
    
    test('should render component as expected', () => {
        // simulate base data
        useGifFetch.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should display items on grid', () => {

        const gifs = [{
            id: 'abc',
            title: 'Abc title',
            url: 'https://localhost/cualquiera.gif'
        }];

        useGifFetch.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category }/>);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        
        expect( wrapper.find('GifItem').length ).toBe( gifs.length );
        
    });
    

})