import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    </div>
  );
}

export default App;
