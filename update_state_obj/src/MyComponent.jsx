import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function updateYear(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function updateMake(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }
  function updateModel(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <div>
      <p>
        Your favorite car is {car.year} {car.make} {car.model}
      </p>
      <input value={car.year} type="number" onChange={updateYear} />
      <input value={car.make} type="text" onChange={updateMake} />
      <input value={car.model} type="text" onChange={updateModel} />
    </div>
  );
}

export default MyComponent;
