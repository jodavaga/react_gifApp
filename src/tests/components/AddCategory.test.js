import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('<AddCategory /> tests', () => {

    const func = () => {};
    
    test('Should render component', () => {
        const wrapper = shallow(<AddCategory setCategories={ func } />)
        expect( wrapper ).toMatchSnapshot();
    });
})