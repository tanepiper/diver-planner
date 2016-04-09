import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../containers/App';
import AppIndex from '../components/AppIndex';
import NotFound from '../components/NotFound';
import AirCalculator from '../components/AirCalculator';
import MaxOperatingDepth from '../components/MaxOperatingDepth';
import PO2Calculator from '../components/PO2Calculator';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute name="area" component={AppIndex}/>
    <Route path="/air-calculator" component={AirCalculator} />
    <Route path="/max-operating-depth" component={MaxOperatingDepth} />
    <Route path="/po2-calculator" component={PO2Calculator} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default (
  <section>
    { routes }
  </section>
);
