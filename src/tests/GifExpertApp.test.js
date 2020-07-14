import React from 'react';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';


describe('<GifExpertApp /> tests', () => {

    test('should render component as expected', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('should render component as with amount of <GifGrid />', () => {
        
        const categories = ['rick', 'morty'];
        const wrapper = shallow(<GifExpertApp myCategories={ categories } />);
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
    
})