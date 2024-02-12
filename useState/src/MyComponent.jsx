import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [number, setNumber] = useState(0);
  const [condition, setCondition] = useState(false);

  const updateName = () => {
    setName("Biruleibe");
  };

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const updateCondition = () => {
    setCondition(!condition);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Update Name</button>
      <br />

      <p>{number}</p>
      <button onClick={incrementNumber}>Increment Number</button>
      <br />

      <p>{condition ? "True" : "False"}</p>
      <button onClick={updateCondition}>
        {condition ? "Set false" : "Set true"}
      </button>
      <br />
    </div>
  );
}

export default MyComponent;
