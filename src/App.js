import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </h2>
    </div>
  );
}
