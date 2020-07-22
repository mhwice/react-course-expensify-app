import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getVisibleExpenses from './../selectors/expenses';
import getExpensesTotal from './../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = ({ expensesTotal, expensesCount }) => {
	const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">
					Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{expensesTotal}</span>
				</h1>
				<div className="page-header__actions">
					<Link className="button" to="/create">Add Expense</Link>
				</div>
			</div>
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
