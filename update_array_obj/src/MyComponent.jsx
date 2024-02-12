import { useState } from "react";

function MyComponent() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState();
  const [carModel, setCarModel] = useState();

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);
  }
  function handleRemoveCar(i) {
    setCars(c => c.filter((_, index) => i !== index))
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <>
      <h2>List of cars</h2>
      <ul>
        {cars.map((car, index) => {
          return (
            <li onClick={() => handleRemoveCar(index)} key={index}>
              {car.year} {car.make} {car.model}
            </li>
          );
        })}
      </ul>

      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Car year"
      />
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Car make"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Car model"
      />
      <br />

      <button onClick={handleAddCar}>Add car</button>
    </>
  );
}

export default MyComponent;
