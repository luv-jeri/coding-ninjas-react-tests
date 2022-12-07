import React, { useState } from 'react';
import './styles.css';

const App = () => {
  const [number, setNumber] = useState(0);
  const handleAdd = () => {
    setNumber(number + 2);
  };
  const handleSquare = () => {
    setNumber(number * number);
  };
  const handleDouble = () => {
    setNumber(number * 2);
  };
  const handleDivide = () => {
    setNumber(number / 2);
  };
  const handleSubract = () => {
    setNumber(number - 2);
  };

  return (
    <div className='container'>
      <h1>{number}</h1>
      <div className='buttons-wrapper'>
        <button id='add' onClick={handleAdd}>
          Add 2
        </button>
        <button id='square' onClick={handleSquare}>
          Square{' '}
        </button>
        <button id='double' onClick={handleDouble}>
          Double
        </button>
        <button id='divide' onClick={handleDivide}>
          Divide by 2
        </button>
        <button id='subract' onClick={handleSubract}>
          Subract 2
        </button>
      </div>
    </div>
  );
};

export default App;
