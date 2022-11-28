import './styles.css';
import { addCount, substractCount } from './actions';
import { useState } from 'react';
 
export default function App(props) {
  const { count } = props.store.getState();
  
  // !  unused - value and toggle are not used in this example [ samole code ]
  const [value, toggle] = useState(0);

  const add = () => {
    addCount(props.store);

    toggle((value) => value ^ 1); // ! unused -  [ samole code ]
  };

  const substract = () => {
    substractCount(props.store);

    toggle((value) => value ^ 1); // ! unused - [ samole code ]
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
