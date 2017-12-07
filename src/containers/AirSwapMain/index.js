import React from 'react';
import { Route, Link } from 'react-router-dom'
import AirSwapHome from 'containers/AirSwapHome'


/* Define Routes here */
const AirSwapMain = () => (
  <div>
    <main>
      <Route exact path="/" component={AirSwapHome} />
    </main>
  </div>
)

export default AirSwapMain;
