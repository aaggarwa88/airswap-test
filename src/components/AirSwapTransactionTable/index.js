import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';
import styles from './styles.css';
import AirSwapTextInput from 'components/AirSwapTextInput'
import { Link } from 'react-router-dom'

const AirSwapTransactionTable = (props) => {
  const { allTransactions } = props;
  return (
    <Grid className={styles.tableContainer} fluid>
        <AirSwapTransactionTableRow
          age="Age: "
          to="To: "
          from="From: "
          value="Value: "
          />
        {
          allTransactions.map(({timestamp, from, to, value}) => {
            const toLink = <Link to={`/?q=${to}`}>{to}</Link>
            const fromLink = <Link to={`/?q=${from}`}>{from}</Link>
            return (
              <AirSwapTransactionTableRow
                age={moment(timestamp).fromNow()}
                to={toLink}
                from={fromLink}
                value={value}
                />
            )
          })
        }
    </Grid>
  )
}



const AirSwapTransactionTableRow = ({age, from, to, value}) => (
  <Col xs={12} className={styles.rowContainer}>
    <Row middle="xs" start="xs">
       <Col className={styles.hideSmall}   xs={4}>
        {from}
       </Col>
       <Col xs={8} md={4} >
         {to}
       </Col>
       <Col xs={4} md={4}>
         {value}
       </Col>
    </Row>
  </Col>
)

export default AirSwapTransactionTable
