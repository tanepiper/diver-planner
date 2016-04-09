import React, { Component } from 'react';
import {Row, Col, Input, Alert} from 'react-bootstrap';

export default class PO2Calculator extends Component {

  state = {
    maxPO2: 1.4,
    po2: 0,
    depth: 0,
    oxygenPercentage: 0
  }

  constructor(props) {
    super(props);
  }

  calculate() {
    const oxygenPercentage = this.refs.oxygenPercentage.getValue();
    const depth = this.refs.depth.getValue();
    const po2 = (oxygenPercentage / 100) * ((depth / 10) + 1);
    this.setState({
      oxygenPercentage: oxygenPercentage,
      depth: depth,
      po2: po2
    });
  }

  render() {
    return (
      <section>
        <h2>Maximum Operating Depth</h2>
        <Row>
          <Col xs={6} xsOffset={3}>
            <Input ref="oxygenPercentage" type="number" addonAfter="% O2" value={this.state.oxygenPercentage} onChange={this.calculate.bind(this)} label="Oxygen (O2) Percentage" />
            <Input ref="depth" type="number" addonAfter="Meters" value={this.state.depth} onChange={this.calculate.bind(this)} label="Depth" />
          </Col>
        </Row>
        <Row>
          <Alert bsStyle={this.state.po2 > this.state.maxPO2 ? 'danger': 'info'}>
            <div>
              <strong>PO2:</strong> {this.state.po2.toFixed(2)}
            </div>
            <div>
              {this.state.po2 > this.state.maxPO2 ? <strong>PO2 excedes the recommended maximum of {this.state.maxPO2}</strong> : null}
            </div>
          </Alert>
        </Row>
      </section>
    );
  }
}
