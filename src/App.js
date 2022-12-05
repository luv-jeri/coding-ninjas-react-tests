import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  add = () => {
    this.setState({
      number: this.state.number + 2,
    });
  };

  double = () => {
    this.setState({
      number: this.state.number * 2,
    });
  };

  square = () => {
    this.setState({
      number: this.state.number * this.state.number,
    });
  };

  divide = () => {
    this.setState({
      number: this.state.number / 2,
    });
  };

  subract = () => {
    this.setState({
      number: this.state.number - 2,
    });
  };

  render() {
    const { number } = this.state;
    return (
      <div className='container'>
        <h1>{number}</h1>
        <div className='buttons-wrapper'>
          <button id='add' onClick={this.add}>
            Add 2
          </button>
          <button id='square' onClick={this.square}>
            Square{' '}
          </button>
          <button id='double' onClick={this.double}>
            Double
          </button>
          <button id='divide' onClick={this.divide}>
            Divide by 2
          </button>
          <button id='subract' onClick={this.subract}>
            Subract 2
          </button>
        </div>
      </div>
    );
  }
}

export default App;
