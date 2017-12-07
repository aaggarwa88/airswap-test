import { combineReducers } from 'redux';

export const RECEIVE_PRICE = 'airswapPrice/RECEIVE_PRICE';
export const REQUEST_PRICE = 'airswapPrice/REQUEST_PRICE';

/***********************
  REDUCER DEFINITION
************************/

const price = (state = null, action) => {
  switch(action.type) {
    case RECEIVE_PRICE: return action.price;
    default: return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case RECEIVE_PRICE: return false;
    case REQUEST_PRICE: return true;
    default: return state;
  }
};

export default combineReducers({
  price,
  isLoading,
});

/***********************
  ACTION & CREATORS
************************/


export const requestPrice= () => ({
  type: REQUEST_PRICE
})

export const recievePrice= (data) => ({
  ...data,
  type: RECEIVE_PRICE
})

export const queryPrice = () =>
  (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(requestPrice())
    return fetch(`https://api.coinmarketcap.com/v1/ticker/airswap/`)
      .then(response => response.json())
      .then(responseJson => {
        if(!responseJson.error) {
          dispatch(recievePrice({price: responseJson[0].price_usd}))
          resolve();
        } else {
          reject(responseJson.error);
        }
      })
      .catch(error => {
        reject(error);
    });
  })
