/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {

    it('has a "<title>" tag equal to Estimeo Highlights', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.find('title').text()).toBe("Estimeo Highlights");
    })
})
