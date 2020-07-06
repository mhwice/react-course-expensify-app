import React from 'react';
import { EditExpensePage } from './../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from './../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[0]}
    />
  );
});

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  const id = expenses[0].id;
  const expense = {
    description: 'pizza'
  };
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(editExpense).toHaveBeenLastCalledWith(id, expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
  const id = expenses[0].id;
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith(id);
  expect(history.push).toHaveBeenLastCalledWith('/');
});