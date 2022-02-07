import React, { createContext, useReducer } from "react";
import AddReducer from "./AddReducer";
import axios from "axios";

//Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AddReducer, initialState);

  //Actions

  async function getTransactions() {
    try {
      const res = await axios.get("http://localhost:5000/api/v1/transactions");
      console.log(res);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function deleteTransactions(id) {
    try {
      await axios.delete(`http://localhost:5000/api/v1/transactions/${id}`);
      console.log(id);

      dispatch({
        type: "DELETE_TRANSACTIONS",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addTransactions(transaction) {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/transactions",
        transaction,
        config
      );
      console.log(res);
      dispatch({
        type: "ADD_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
