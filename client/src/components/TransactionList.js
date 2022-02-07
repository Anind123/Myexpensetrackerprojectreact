import React, { useContext, useEffect } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3 style={{ color: "#0080ff" }}>My Histroy check</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
