import List from "./List";
import PropsList from "./PropsList";

function App() {
  const animals = [
    { id: 0, name: "lion" },
    { id: 1, name: "bear" },
    { id: 2, name: "aligator" },
    { id: 3, name: "bee" },
    { id: 4, name: "monkey" },
  ];
  const numbers = [
    { id: 6, name: "one" },
    { id: 7, name: "two" },
    { id: 8, name: "three" },
    { id: 9, name: "four" },
    { id: 10, name: "five" },
  ];

  return (
    <div>
      <List />
      <PropsList items={animals} category="Animals" />
      <PropsList items={numbers} category="Numbers" />
    </div>
  );
}

export default App;
