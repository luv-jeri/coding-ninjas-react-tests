import './styles.css';
import { addCount, substractCount } from './actions';
import { useState } from 'react';

export default function App(props) {
  const { count } = props.store.getState();
  const [value, toggle] = useState(0);

  const add = () => {
    addCount(props.store);
    toggle((value) => value ^ 1);
  };

  const substract = () => {
    substractCount(props.store);
    toggle((value) => value ^ 1);
  };
  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <h2>
        <button onClick={add}>+</button>
        <button onClick={substract}>-</button>
      </h2>
    </div>
  );
}
