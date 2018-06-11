import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Actions
import { container as Container } from '../../components/container/';

export default Welcome;
class Welcome extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  state = {
    toggl: false,
  };

  novafunc = () => {
    this.setState({
      toggl: !this.state.toggl,
    });
  };

  render() {
    return (
      <Container>
        {this.state.toggl && <h1>Login</h1>}
        <div onClick={this.novafunc}>Welcome</div>
      </Container>
    );
  }
}

Welcome.propTypes = {};

export { Welcome };
