/**
 * @class AirSwapHero
 */

import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

import styles from './styles.css';
import AirSwapTextInput from 'components/AirSwapTextInput'

import AirSwapTokenPrice from 'components/AirSwapTokenPrice'

const AirSwapHero = (props) => (
  <Grid className={styles.hero} fluid>
    <Col xs={12}>
      <Row middle="xs" center="xs">
        <AirSwapTextInput {...props}/>
      </Row>
    </Col>
    <div className={`${styles.price}`}>
      Airswap Token USD Price:
      <div>
        <AirSwapTokenPrice className={styles.number}/>
      </div>
    </div>
  </Grid>
)

export default AirSwapHero
