import React from 'react'
import container from './Container';
import AirSwapHeader from 'components/AirSwapHeader'
import AirSwapTransactionTable from 'components/AirSwapTransactionTable'

const Home = props => {
  const { allTransactions } = props;
  const hasResults = !!allTransactions.length;
  return (
    <div>
      <AirSwapHeader {...props}/>
      {
        hasResults &&
        <AirSwapTransactionTable {...props} />
      }
    </div>
  )
}

export default container(Home);
