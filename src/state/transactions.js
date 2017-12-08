/**
 * @class Transaction
 * @description State definition for main search functionality
 */


import { combineReducers } from 'redux';

export const RECEIVE_TRANSACTION = 'transaction/RECEIVE_TRANSACTION';
export const REQUEST_TRANSACTION = 'transaction/REQUEST_TRANSACTION';
export const ERROR_TRANSACTION = 'transaction/ERROR_TRANSACTION';


/***********************
  REDUCER DEFINITION
************************/

const transactions = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_TRANSACTION: return Object.assign({}, state, {[action.transactionKey]: action.transaction});
    default: return state;
  }
}
const searchHistory = (state = [], action) => {
  switch(action.type) {
    case RECEIVE_TRANSACTION:
    const newState = state.filter((key) => key !== action.transactionKey)
    return [action.transactionKey, ...newState];
    default: return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_TRANSACTION: return false;
    case REQUEST_TRANSACTION: return true;
    case ERROR_TRANSACTION: return false;
    default: return state;
  }
};

const isError = (state = '', action) => {
  switch (action.type) {
    case REQUEST_TRANSACTION: return '';
    case RECEIVE_TRANSACTION: return '';
    case ERROR_TRANSACTION: return action.message;
    default: return state;
  }
};

export default combineReducers({
  transactions,
  searchHistory,
  isLoading,
  isError,
})

/***********************
  SELECTOS
************************/

const getTransactions = state => state.transactions.transactions;

/***********************
  ACTION & CREATORS
************************/


export const requestTransaction = () => ({
  type: REQUEST_TRANSACTION
})

export const recieveTransaction = (data) => ({
  ...data,
  type: RECEIVE_TRANSACTION
})

export const errorTransaction = (data) => ({
  ...data,
  type: ERROR_TRANSACTION
})

export const queryTransaction = (transactionKey) =>
  (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(requestTransaction())

    const allTransactions = getTransactions(getState());
    // If already exists in transactions list, use that
    if(allTransactions[transactionKey])  {
      dispatch(recieveTransaction({transactionKey, transaction: allTransactions[transactionKey]}))
      resolve();
    }
    return fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${transactionKey}&startblock=0&endblock=99999999&page=1&offset=100&sort=asc&apikey=YourApiKeyToken`)
      .then(response => response.json())
      .then(responseJson => {
        if(responseJson.status === "1") {
          dispatch(recieveTransaction({transactionKey, transaction: responseJson.result}))
          resolve();
        } else {
          dispatch(errorTransaction({message: responseJson.message}))
          reject(responseJson.message);
        }
      })
      .catch(error => {
        dispatch(errorTransaction({message: error}))
        reject();
    });
  })
