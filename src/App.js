import React, { Component } from 'react';
import Brewery from './Brewery';

// https://api.openbrewerydb.org/breweries?by_city=austin&per_page=50

class App extends Component {
  render() {
    return (
      <div className="App">
        <Brewery />
      </div>
    );
  }
}

export default App;
