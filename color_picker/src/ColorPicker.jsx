import { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000");

  function changeColor(e) {
    setColor(e.target.value);
  }

  return (
    <div className="container">
      <div className="square" style={{ backgroundColor: color }}></div>
      <div className="color-form">
        <input type="color" value={color} onChange={changeColor} />
      </div>
    </div>
  );
}

export default ColorPicker;
