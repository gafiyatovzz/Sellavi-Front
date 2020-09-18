


class App extends React.Component {
  state = {
    data: 'hello React!',
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));