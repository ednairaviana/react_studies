function Button() {
  function handleClick(e) {
    e.target.textContent = "CARALHOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!";
  }

  return <button onClick={(e) => handleClick(e)}>Click me</button>;
}

export default Button;
