import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { container as Container } from '../../components/container/';

export default Welcome;
class Welcome extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };
  novafunc = () => {
    console.log('THIS', this.props.history);
  };
  render() {
    return (
      <Container>
        <h1 onClick={this.novafunc}>Welcome</h1>
      </Container>
    );
  }
}

Welcome.propTypes = {};

export { Welcome };
