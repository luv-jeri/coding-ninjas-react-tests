import React from 'react';
import './styles.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubract = this.handleSubract.bind(this);
    this.handleSquare = this.handleSquare.bind(this);
    this.handleDouble = this.handleDouble.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
  }

  handleAdd() {
    this.setState({
      number: this.state.number + 2,
    });
  }

  handleDouble() {
    this.setState({
      number: this.state.number * 2,
    });
  }

  handleSquare() {
    this.setState({
      number: this.state.number * this.state.number,
    });
  }

  handleDivide() {
    this.setState({
      number: this.state.number / 2,
    });
  }

  handleSubract = () => {
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
          <button id='add' onClick={this.handleAdd}>
            Add 2
          </button>
          <button id='square' onClick={this.handleSquare}>
            Square{' '}
          </button>
          <button id='double' onClick={this.handleDouble}>
            Double
          </button>
          <button id='divide' onClick={this.handleDivide}>
            Divide by 2
          </button>
          <button id='subract' onClick={this.handleSubract}>
            Subract 2
          </button>
        </div>
      </div>
    );
  }
}

export default App;
