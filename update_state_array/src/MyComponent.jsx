import { useState } from "react";

function MyComponent() {
  const [foods, setFood] = useState(["apple"]);
  const [isMessageActive, setMessage] = useState(false);

  function addFood() {
    const newFood = document.getElementById("food-input").value;
    document.getElementById("food-input").value = "";

    if (newFood !== "") {
      setFood((f) => [...f, newFood]);
      setMessage(false);
    } else {
      setMessage(true);
    }
  }

  function removeFood(index) {
    setFood(foods.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li onClick={() => removeFood(index)} key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="food-input" placeholder="Enter food name" />
      <button onClick={addFood}>Add food</button>
      <p style={isMessageActive ? { display: "block" } : { display: "none" }}>
        Please write a food!
      </p>
    </>
  );
}

export default MyComponent;
