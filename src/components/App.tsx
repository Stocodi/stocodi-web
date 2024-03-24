import RootNavigationContainer from '@routes/containers/RootNavigationContainer';
import store from '@store/store';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@styles/components/app.styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RootNavigationContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
