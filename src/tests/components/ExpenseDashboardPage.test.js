import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('Should render not found page', () =>{
    const wrapper = shallow(<ExpenseDashboard/>);
   expect(wrapper).toMatchSnapshot();
});