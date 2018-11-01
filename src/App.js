import React, { Component } from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Layout from './containers/Layout/Layout';
class App extends Component {
  render() {
    return (
      <CssBaseLine>
        <Layout />
      </CssBaseLine>
    );
  }
}

export default App;
