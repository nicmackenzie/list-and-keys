import ExpenseItem from './ExpenseItem';
import Form from './Form';

const EXPENSES = [
  {
    id: 1,
    expenseType: 'Transport',
    amount: 200,
    expenseDate: '2023-05-15',
  },
  {
    id: 2,
    expenseType: 'Lunch',
    amount: 250,
    expenseDate: '2023-05-15',
  },
  {
    id: 3,
    expenseType: 'Airtime',
    amount: 100,
    expenseDate: '2023-05-15',
  },
  {
    id: 4,
    expenseType: 'Snacks',
    amount: 100,
    expenseDate: '2023-05-15',
  },
];

function App() {
  return (
    <div className="app">
      <Form />
      <div className="expenses">
        {EXPENSES.map(expense => (
          <ExpenseItem
            key={expense.id}
            expenseDate={expense.expenseDate}
            expenseType={expense.expenseType}
            amount={expense.amount}
          />
        ))}
      </div>
      {/* <ExpenseItem
          expenseType={EXPENSES[0].expenseType}
          amount={EXPENSES[0].amount}
          expenseDate={EXPENSES[0].expenseDate}
          id={EXPENSES[0].id}
        />
        <ExpenseItem
          expenseType={EXPENSES[1].expenseType}
          amount={EXPENSES[1].amount}
          expenseDate={EXPENSES[1].expenseDate}
          id={EXPENSES[1].id}
        />
        <ExpenseItem
          expenseType={EXPENSES[2].expenseType}
          amount={EXPENSES[2].amount}
          expenseDate={EXPENSES[2].expenseDate}
          id={EXPENSES[2].id}
        />
        <ExpenseItem
          expenseType={EXPENSES[3].expenseType}
          amount={EXPENSES[3].amount}
          expenseDate={EXPENSES[3].expenseDate}
          id={EXPENSES[3].id}
        /> */}
      {/* </div> */}

      {/* {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          expenseType={expense.expenseType}
          amount={expense.amount}
          id={expense.id}
          expenseDate={expense.expenseDate}
          expenses={expenses}
          setExpenses={setExpenses}
        />
      ))} */}
    </div>
  );
}

export default App;
