import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import { GifItem } from '../../components/GifItem';

describe('<GifItem /> tests', () => {

    let wrapper = shallow(<GifItem />);

    beforeEach(() => {
        wrapper = shallow(<GifItem />);
    })

    test('Should render component', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('img').length).toBe(1);
    });
})