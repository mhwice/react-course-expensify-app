import React from 'react';
import { connect } from 'react-redux';
import getVisibleExpenses from './../selectors/expenses';
import getExpensesTotal from './../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expensesTotal, expensesCount }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWord} totalling {expensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expensesTotal: numeral(getExpensesTotal(visibleExpenses) / 100).format('$0,0.00'),
    expensesCount: visibleExpenses.length
  };
};

export default connect(mapStateToProps)(ExpenseSummary);