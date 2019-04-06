import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('Should render header', () =>{
    const wrapper = shallow(<Header/>);
   expect(wrapper).toMatchSnapshot();

   // expect(wrapper.find('h1').length).toBe(1);

    //below lines uses React shallow render to create snapshot. which is overridden usinfg enzyme in above code.
    //  const renderer = new ReactShallowRenderer();
    //  renderer.render(<Header/>);
    //  expect(renderer.getRenderOutput()).toMatchSnapshot();
});