import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'views/Home';
import About from 'views/About';

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Route component={Header} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;