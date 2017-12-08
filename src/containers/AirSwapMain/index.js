/**
 * @class AirSwapMain
 * @description Use for main Router definition of app
 */

import React from 'react';
import { Route } from 'react-router-dom'
import AirSwapHome from 'containers/AirSwapHome'

const AirSwapMain = () => (
  <div>
    <main>
      <Route exact path="/" component={AirSwapHome} />
    </main>
  </div>
)

export default AirSwapMain;
