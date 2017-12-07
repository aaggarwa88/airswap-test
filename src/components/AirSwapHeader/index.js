import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

import AirSwapHero from 'components/AirSwapHero';
import AirSwapTokenPrice from 'components/AirSwapTokenPrice'

import { Link } from 'react-router-dom';
import LogoBlack from 'assets/logo-airswap-black.png';

import styles from './styles.css';

const AirSwapHeader = (props) => (
  <div className={styles.header}>
    <Row className={styles.navBar}>
      <Col xs={12}>
        <Row middle="xs" center="xs">
          <Link to="/">
            <img className={styles.logo} src={LogoBlack} />
          </Link>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <AirSwapHero {...props} />
      </Col>
    </Row>

  </div>
)

export default AirSwapHeader
