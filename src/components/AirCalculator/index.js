import React, { Component } from 'react';
import {Row, Col, Input, Alert} from 'react-bootstrap';

export default class AirCalculator extends Component {

  state = {
    surfaceAirConsumption: 0,
    depth: 0,
    duration: 0,
    reserveRequired: 0,
    cylinderSize: 0,
    cylinerPressure: 0,
    litresRequired: 0,
    litresAvailable: 0,
  };

  constructor(props) {
    super(props);
  }

  calculate() {
    const surfaceAirConsumption = this.refs.surfaceAirConsumption.getValue();
    const depth = this.refs.depth.getValue();
    const duration = this.refs.duration.getValue();
    const bar = (depth / 10) + 1;
    const litresRequired = Math.floor(surfaceAirConsumption * bar * duration);

    const reserveRequired = this.refs.reserveRequired.getValue();
    const cylinderSize = this.refs.cylinderSize.getValue();
    const cylinerPressure = this.refs.cylinerPressure.getValue();
    const litresAvailable = Math.floor((cylinderSize * cylinerPressure) - reserveRequired);


    this.setState({
      surfaceAirConsumption: surfaceAirConsumption,
      depth: depth,
      duration: duration,
      reserveRequired: reserveRequired,
      cylinderSize: cylinderSize,
      cylinerPressure: cylinerPressure,
      litresRequired: litresRequired,
      litresAvailable: litresAvailable
    });
  }

  render() {
    return (
      <section>
        <h2>Air Calculator</h2>
        <Row>
          <Col xs={6}>
            <form>
              <Input ref="surfaceAirConsumption" type="number" addonAfter="L/Min" value={this.state.surfaceAirConsumption} onChange={this.calculate.bind(this)} label="Surface Air Consumption" />
              <Input ref="depth" type="number" addonAfter="Metres" value={this.state.depth} onChange={this.calculate.bind(this)} label="Depth" />
              <Input ref="duration" type="number" addonAfter="Minutes" value={this.state.duration} onChange={this.calculate.bind(this)} label="Duration of dive" />

            </form>
          </Col>

          <Col xs={6}>
            <form>
              <Input ref="reserveRequired" type="number" addonAfter="BAR" value={this.state.reserveRequired} onChange={this.calculate.bind(this)} label="Reserve Required" />
              <Input ref="cylinderSize" type="number" addonAfter="L" value={this.state.cylinderSize} onChange={this.calculate.bind(this)} label="Cylinder Size" />
              <Input ref="cylinerPressure" type="number" addonAfter="BAR" value={this.state.cylinerPressure} onChange={this.calculate.bind(this)} label="Cyliner Pressure" />
            </form>
          </Col>
        </Row>
        <Row>
          <Alert bsStyle={this.state.litresRequired >= this.state.litresAvailable ? 'danger' : 'info'}>
          <div>
            <strong>Litres Required:</strong> {this.state.litresRequired}
          </div>
          <div>
            <strong>Litres Available:</strong> {this.state.litresAvailable}
          </div>
          {this.state.litresRequired >= this.state.litresAvailable ? <strong>You do not have enough air for this dive</strong> : null}
          </Alert>
        </Row>
      </section>
    );
  }


}
