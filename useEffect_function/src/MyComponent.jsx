import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("#000000");

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    document.title = `Count ${count}, Color ${color}`;
  }, [count, color]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // good practice
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, height]);

  function incrementCount() {
    setCount((c) => c + 1);
  }

  function decrementCount() {
    setCount((c) => c - 1);
  }

  function changeColor(e) {
    setColor(e.target.value);
  }

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <br />

      <div style={{ backgroundColor: color }} className="square"></div>
      <input type="color" value={color} onChange={changeColor} />
      <br />

      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </>
  );
}

export default MyComponent;
