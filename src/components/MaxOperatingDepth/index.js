import React, { Component, PropTypes } from 'react';
import {Row, Col, Input, Panel} from 'react-bootstrap';

import {maximumOperatingDepth} from './../../utils/calculators';

export default class MaxOperatingDepth extends Component {

  static propTypes = {
    maxPO2: PropTypes.number,
    oxygenPercentage: PropTypes.number
  };

  static defaultProps = {
    maxPO2: 1.4,
    oxygenPercentage: 21
  }

  state = {
    oxygenPercentage: 0,
    maxOperatingDepth: 0
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      oxygenPercentage: this.props.oxygenPercentage,
      maxOperatingDepth: maximumOperatingDepth(this.props.oxygenPercentage, this.props.maxPO2)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      oxygenPercentage: nextProps.oxygenPercentage,
      maxOperatingDepth: maximumOperatingDepth(nextProps.oxygenPercentage, nextProps.maxPO2)
    });
  }

  calculate() {
    const oxygenPercentage = this.refs.oxygenPercentage.getValue();

    this.setState({
      oxygenPercentage: oxygenPercentage,
      maxOperatingDepth: maximumOperatingDepth(oxygenPercentage, this.props.maxPO2)
    });
  }

  renderFooter() {
    return (
      <section>
        <strong>Maximum Operating Depth:</strong> {this.state.maxOperatingDepth} Meters
        </section>
      );
  }

  render() {
    return (
      <Panel header="Maximum Operating Depth" footer={this.renderFooter()} bsStyle="info">
        <h2></h2>
        <Row>
          <Col xs={6} xsOffset={3}>
            <Input ref="oxygenPercentage" type="number" addonAfter="% O2" value={this.state.oxygenPercentage} onChange={this.calculate.bind(this)} label="Oxygen (O2) Percentage" />
          </Col>
        </Row>
      </Panel>
    );
  }
}
