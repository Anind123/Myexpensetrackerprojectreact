import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((Transaction) => Transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <div>
        <h4 style={{ color: "#ff00bf" }}> Anu's Balancesheet</h4>
        <h1 id="balance"> {total}</h1>
      </div>
    </>
  );
};

export default Balance;
