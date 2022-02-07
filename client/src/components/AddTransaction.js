import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransactions } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      // id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransactions(newTransaction);
  };
  return (
    <>
      <h3>My newly created Transaction </h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text"> My Text </label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Please enter text here...."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            My Amount <br />
            (negetive - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Please enter amount here...."
          />
        </div>
        <button className="btn">Adding my transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
