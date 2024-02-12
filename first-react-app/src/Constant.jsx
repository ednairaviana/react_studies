function Constant() {
  const const1 = "This is a constant.";
  const const2 = "This is another constant.";
  const const3 = "This is a uppercase constant with js method.";

  return (
    <ul>
      <li>{const1}</li>
      <li>{const2}</li>
      <li>This is not a constant</li>
      <li>{const3.toUpperCase()}</li>
    </ul>
  );
}

export default Constant;
