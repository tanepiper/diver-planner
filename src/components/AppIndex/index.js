import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';

export default class AppIndex extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col xs={3}>
          <h2>Menu</h2>
          <ul>
            <li><Link to="/air-calculator">Air Calculator</Link></li>
            <li><Link to="/max-operating-depth">Max Operating Depth</Link></li>
            <li><Link to="/po2-calculator">PO2 Calculator</Link></li>
          </ul>
        </Col>
        <Col xs={9}><h2>Dive Table</h2></Col>
      </Row>
    );
  }
}
