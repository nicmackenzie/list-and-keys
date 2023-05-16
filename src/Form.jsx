import { useRef } from 'react';
function Form({ setExpenses }) {
  const dateRef = useRef();
  const amountRef = useRef();
  const typeRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const expenseDate = dateRef.current.value;
    const expenseType = typeRef.current.value;
    const amount = amountRef.current.value;

    const expenseObj = {
      id: new Date().toISOString(),
      expenseDate,
      expenseType,
      amount,
    };

    setExpenses(prev => [...prev, expenseObj]);
    dateRef.current.value =
      typeRef.current.value =
      amountRef.current.value =
        '';
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-control">
        <label htmlFor="date">Expense Date</label>
        <input type="date" id="date" name="date" ref={dateRef} />
      </div>
      <div className="form-control">
        <label htmlFor="type">Expense Type</label>
        <select name="type" id="type" ref={typeRef}>
          <option value="">Select expense</option>
          <option value="transport">Transport</option>
          <option value="lunch">Lunch</option>
          <option value="airtime">Airtime</option>
          <option value="snacks">Snacks</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" ref={amountRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
