import { useEffect, useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);

  useEffect(() => {
    console.log("Component rendered!");
    console.log(inputRef);
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.background = "purple";
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "";
  }

  function handleClick1() {
    inputRef1.current.focus();
    inputRef.current.style.background = "";
    inputRef1.current.style.background = "purple";
    inputRef2.current.style.background = "";
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef.current.style.background = "";
    inputRef1.current.style.background = "";
    inputRef2.current.style.background = "purple";
  }

  return (
    <>
      <button onClick={handleClick}>Click me!!</button>
      <input ref={inputRef} />
      <br />

      <button onClick={handleClick1}>Click me!!</button>
      <input ref={inputRef1} />
      <br />

      <button onClick={handleClick2}>Click me!!</button>
      <input ref={inputRef2} />
      <br />
    </>
  );
}

export default MyComponent;
