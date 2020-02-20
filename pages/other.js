import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startClock, tickClock } from '../src/store/actions';
import App from '../src/components/App';

class Other extends Component {
  static async getInitialProps (props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));
    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return <App title="Other page" linkTo="/" NavigateTo="IndexPage" />
  }
}

export default connect()(Other);
