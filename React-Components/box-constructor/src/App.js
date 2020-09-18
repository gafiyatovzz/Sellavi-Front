import React from 'react';
import './App.css';
import BoxConstructor from './containers/BoxConstructor'


class App extends React.Component {

  state = {
  }

  render() {
    return (
      <div className="App">
        <BoxConstructor/>
      </div>
    );
  }
}

export default App;
