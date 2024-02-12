function List() {
  const fruits = [
    { id: 1, name: "orange", calories: 24 },
    { id: 2, name: "apple", calories: 35 },
    { id: 3, name: "pineapple", calories: 132 },
    { id: 4, name: "grapes", calories: 67 },
    { id: 5, name: "banana", calories: 90 },
  ];

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); ALPHABETICAL
  //   fruits.sort((a, b) =>  b.name.localeCompare(a.name)); REVERSE ALPHABETICAL

  const lowCalories = fruits.filter((fruit) => fruit.calories < 90);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));
  const lowList = lowCalories.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <ul>{listItems}</ul>
      <br />
      <ul>{lowList}</ul>
      <br />
    </>
  );
}

export default List;
