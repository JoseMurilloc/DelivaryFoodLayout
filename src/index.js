import React from 'react';
import './config/ReactotronConfig';

import Routes from './routes';

import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Routes />
    </>
  );
};

export default App;
