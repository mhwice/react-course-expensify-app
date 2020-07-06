import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from './../../components/ExpenseListItem';
import expenses from './../fixtures/expenses';

test('should render ExpenseListItem with expense passed in', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

