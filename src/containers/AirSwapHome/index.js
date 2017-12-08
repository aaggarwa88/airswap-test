/**
 * @class AirSwapMain
 * @description The one and only homepage
 */

import React from 'react'
import container from './Container';
import AirSwapHeader from 'components/AirSwapHeader'
import AirSwapTransactionTable from 'components/AirSwapTransactionTable'

import styles from './styles.css'
import ethereum from 'assets/logo-symbol-ethereum.png'

const Home = props => {
  const { allTransactions } = props;
  const hasResults = !!allTransactions.length;
  return (
    <div className={styles.home} >
      <AirSwapHeader {...props}/>
      {
        hasResults &&
        <AirSwapTransactionTable {...props} />
      }
      <div className={styles.homeBg}>
        <img className={styles.homeBgImg} src={ethereum} />
      </div>
    </div>
  )
}

export default container(Home);
