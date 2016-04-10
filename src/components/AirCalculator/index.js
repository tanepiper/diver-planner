import React, { Component, PropTypes } from 'react';
import {Row, Col, Input, Panel} from 'react-bootstrap';

import {litresRequired, litresAvailable} from './../../utils/calculators';

export default class AirCalculator extends Component {

  static propTypes = {
    surfaceAirConsumption: PropTypes.number
  };

  static defaultProps = {
    surfaceAirConsumption: 25
  }

  state = {
    surfaceAirConsumption: 0,
    depth: 30,
    duration: 20,
    reserveRequired: 50,
    cylinderSize: 12,
    cylinerPressure: 220,
    litresRequired: 0,
    litresAvailable: 0,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.setState({
      surfaceAirConsumption: this.props.surfaceAirConsumption,
      litresRequired: litresRequired(this.props.surfaceAirConsumption, this.state.depth, this.state.duration),
      litresAvailable: litresAvailable(this.state.cylinderSize , this.state.cylinerPressure, this.state.reserveRequired)
    });
  }

  componentWillReceiveProps(nextProps) {

    this.setState({
      surfaceAirConsumption: nextProps.surfaceAirConsumption,
      litresRequired: litresRequired(nextProps.surfaceAirConsumption, this.state.depth, this.state.duration),
      litresAvailable: litresAvailable(this.state.cylinderSize , this.state.cylinerPressure, this.state.reserveRequired)
    });
  }

  calculate() {
    const surfaceAirConsumption = this.refs.surfaceAirConsumption.getValue();
    const depth = this.refs.depth.getValue();
    const duration = this.refs.duration.getValue();
    const reserveRequired = this.refs.reserveRequired.getValue();
    const cylinderSize = this.refs.cylinderSize.getValue();
    const cylinerPressure = this.refs.cylinerPressure.getValue();

    this.setState({
      surfaceAirConsumption: surfaceAirConsumption,
      depth: depth,
      duration: duration,
      reserveRequired: reserveRequired,
      cylinderSize: cylinderSize,
      cylinerPressure: cylinerPressure,
      litresRequired: litresRequired(surfaceAirConsumption, depth, duration),
      litresAvailable: litresAvailable(cylinderSize , cylinerPressure, reserveRequired)
    });
  }

  renderOutput() {
    return (
      <section>
      <div>
        <strong>Litres Required:</strong> {this.state.litresRequired}
      </div>
      <div>
        <strong>Litres Available:</strong> {this.state.litresAvailable} <strong>Total Litres (inc reserve):</strong> {parseInt(this.state.litresAvailable) + parseInt(this.state.reserveRequired)}
      </div>
      {this.state.litresRequired >= this.state.litresAvailable ? <strong>You do not have enough air for this dive</strong> : null}
      </section>
    );
  }

  render() {
    return (
      <Panel header="Air Calculator" footer={this.renderOutput()} bsStyle={this.state.litresRequired >= this.state.litresAvailable ? 'danger' : 'info'}>
        <Row>
          <Col xs={6}>
            <form>
              <Input ref="surfaceAirConsumption" type="number" addonAfter="Litres/Minute" value={this.state.surfaceAirConsumption} onChange={this.calculate.bind(this)} label="Surface Air Consumption" />
              <Input ref="depth" type="number" addonAfter="Metres" value={this.state.depth} onChange={this.calculate.bind(this)} label="Depth" />
              <Input ref="duration" type="number" addonAfter="Minutes" value={this.state.duration} onChange={this.calculate.bind(this)} label="Duration of dive" />

            </form>
          </Col>

          <Col xs={6}>
            <form>
              <Input ref="reserveRequired" type="number" addonAfter="Bar" value={this.state.reserveRequired} onChange={this.calculate.bind(this)} label="Reserve Required" />
              <Input ref="cylinderSize" type="number" addonAfter="Litres" value={this.state.cylinderSize} onChange={this.calculate.bind(this)} label="Cylinder Size" />
              <Input ref="cylinerPressure" type="number" addonAfter="Bar" value={this.state.cylinerPressure} onChange={this.calculate.bind(this)} label="Cyliner Pressure" />
            </form>
          </Col>
        </Row>
      </Panel>
    );
  }


}
