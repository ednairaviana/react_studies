import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = (number) => {
    setCount(count + number);
  };

  const decrement = (number) => {
    setCount(count - number);
  };

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment(1)}>+1</button>
      <button onClick={() => increment(2)}>+2</button>
      <button onClick={() => increment(3)}>+3</button>
      <br />
      <button onClick={() => decrement(1)}>-1</button>
      <button onClick={() => decrement(2)}>-2</button>
      <button onClick={() => decrement(3)}>-3</button>
      <br />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default Counter;
