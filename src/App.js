import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { Header, ImageGrid } from './components';
import configureStore from './store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <ImageGrid />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
