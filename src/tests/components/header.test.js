import React from 'react';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    expect(wrapper).toMatchSnapshot();
   // expect(wrapper.find('h1').length).toBe(1);
    //below lines uses React shallow render to create snapshot. which is overridden usinfg enzyme in above code.
    //  const renderer = new ReactShallowRenderer();
    //  renderer.render(<Header/>);
    //  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
  });