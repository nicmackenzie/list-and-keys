function ExpenseItem({ expenseDate, amount, expenseType }) {
  return (
    <div className="expense">
      <div>
        <div className="date">{expenseDate}</div>
        <h2>{expenseType}</h2>
      </div>
      <div className="amount">Ksh {amount}</div>
    </div>
  );
}

export default ExpenseItem;
