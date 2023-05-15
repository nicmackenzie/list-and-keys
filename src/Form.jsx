function Form() {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="date">Expense Date</label>
        <input type="date" id="date" name="date" />
      </div>
      <div className="form-control">
        <label htmlFor="type">Expense Type</label>
        <select name="type" id="type">
          <option value="">Select expense</option>
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" name="amount" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
