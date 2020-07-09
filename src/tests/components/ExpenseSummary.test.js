import React from 'react';
import { ExpenseSummary } from './../../components/ExpenseSummary';
import { shallow } from 'enzyme';

test('should render ExpenseSummary correctly with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={321} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary correctly with many expense', () => {
  const wrapper = shallow(<ExpenseSummary expensesCount={22} expensesTotal={321231} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly sum many expenses', () => {
  
});

test('', () => {
  
});