import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('test render expense list with data', () =>{
    const wrapper = shallow(<ExpenseList expenses = {expenses}/>)
    expect(wrapper).toMatchSnapshot();
});

test('test render expense list with no data', () =>{
    const wrapper = shallow(<ExpenseList expenses = {[]}/>) 
    expect(wrapper).toMatchSnapshot();
});