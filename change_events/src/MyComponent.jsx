import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangePayment(e) {
    setPayment(e.target.value);
  }

  function handleChangeShipping(e) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleChangeName} />
      <p>{name}</p>
      <br />

      <select value={payment} onChange={handleChangePayment}>
        <option value="" disabled="true">
          Select payment
        </option>
        <option value="Visa">Visa</option>
        <option value="Pix">Pix</option>
        <option value="Nubank">Nubank</option>
      </select>
      <p>{payment}</p>
      <br />

      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleChangeShipping}
        />
        Delivery
      </label>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleChangeShipping}
        />
        Pick up
      </label>

      <p>{shipping}</p>
    </div>
  );
}

export default MyComponent;
