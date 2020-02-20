import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadData, startClock, tickClock} from '../src/store/actions';
import App from '../src/components/App';

class Index extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return { isServer };
  }

  componentDidMount() {
    this.props.dispatch(startClock())
  }

  render(){
    return (
      <App title="Index page" linkTo="/other" NavigateTo="Other Page" />
      );
  }
}

export default connect()(Index);
