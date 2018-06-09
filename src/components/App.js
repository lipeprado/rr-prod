import React from 'react';
import { Route } from 'react-router-dom';

import { Welcome } from 'containers/Welcome/Welcome';

const App = () => {
  return <Route path="/" component={Welcome} exact />;
};

export default App;
