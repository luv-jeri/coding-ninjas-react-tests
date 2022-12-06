import { useState, useEffect } from 'react';

// Use React Hooks for incrementing, decrementing nd resetting the value of the counter.
// Also, print the value of count on the console by using useEffect hook.

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  const handlePlus = () => {
    setCount((state) => {
      return state + 1;
    });
    // or setCount(count + 1);
  };

  const handleMinus = () => {
    setCount((state) => {
      return state - 1;
    }); // or setCount(count - 1);
  };

  const handleReset = () => {
    setCount((state) => {
      return 0;
    }); // or setCount(0);
  };
  return (
    <>
      <p>Count value is: {count}</p>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handlePlus}>Plus (+)</button>
      <button onClick={handleMinus}>Minus (-)</button>
    </>
  );
}

export default Counter;
