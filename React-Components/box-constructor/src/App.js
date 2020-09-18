import React from 'react';
import './App.css';
import BoxConstructor from './containers/BoxConstructor'


class App extends React.Component {

  state = {
    currentVolume: 0,
  }

  changeVolume = (e) => {
    this.setState({currentVolume: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <BoxConstructor volume={this.state.currentVolume} changeVolume={this.changeVolume}/>
      </div>
    );
  }
}

export default App;
