import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';

class App extends Component {

  static propTypes = {
    children: PropTypes.object
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid>
        {this.props.children}
      </Grid>
    );
  }

}

const mapStateToProps = (state) => ({
  routing: state.routing
});

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
