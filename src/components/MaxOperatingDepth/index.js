import React, { Component } from 'react';
import {Row, Col, Input, Alert} from 'react-bootstrap';

export default class MaxOperatingDepth extends Component {

  state = {
    maxPO2: 1.4,
    oxygenPercentage: 0,
    maxOperatingDepth: 0
  }

  constructor(props) {
    super(props);
  }

  calculate() {
    const oxygenPercentage = this.refs.oxygenPercentage.getValue();
    const maxOperatingDepth = (((this.state.maxPO2 / (oxygenPercentage / 100)) - 1) * 10).toFixed(2);
    this.setState({
      oxygenPercentage: oxygenPercentage,
      maxOperatingDepth: maxOperatingDepth
    });
  }

  render() {
    return (
      <section>
        <h2>Maximum Operating Depth</h2>
        <Row>
          <Col xs={6} xsOffset={3}>
            <Input ref="oxygenPercentage" type="number" addonAfter="% O2" value={this.state.oxygenPercentage} onChange={this.calculate.bind(this)} label="Oxygen (O2) Percentage" />
          </Col>
        </Row>
        <Row>
          <Alert bsStyle="info">
            <div>
              <strong>Maximum Operating Depth:</strong> {this.state.maxOperatingDepth} Meters
            </div>
          </Alert>
        </Row>
      </section>
    );
  }
}
