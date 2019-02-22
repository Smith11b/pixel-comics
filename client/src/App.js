import React, { Component } from 'react';
import Nav from './components/Nav';
import Routes from './Routes';

class App extends Component {
  constructor(){
    super();
    this.state = {
      fileInput: null,
      images:  null,
      token: null
    }
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Routes />
      </div>
    );
  }
}

export default App;
