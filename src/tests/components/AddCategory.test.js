import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('<AddCategory /> tests', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });
    
    test('Should render component', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Should trigger change on input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value } });

        // expect(input.prop('value')).toBe(value);
    });

    test('should NOT call setCategories', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled(); 
    });

    test('should call setCategories and clean input', () => {

        const input = wrapper.find('input');
        // simulate input Change
        input.simulate('change', { target: { value: 'rick' } });
        // simulate submit form - Enter
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        // Expect to have been called as a function
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) )

        expect( input.prop('value') ).toBe('');
    });
})