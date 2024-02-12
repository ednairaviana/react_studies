import Person from "./Person";

function App() {
  return (
    <div className="container">
      <Person name="Maria" age={32} isCorno={false}></Person>
      <Person name="Rodolfo" age={62} isCorno={false}></Person>
      <Person name="Bonoro" age={214124} isCorno={true}></Person>
      <Person age={21} isCorno={true}></Person>
    </div>
  );
}

export default App;
