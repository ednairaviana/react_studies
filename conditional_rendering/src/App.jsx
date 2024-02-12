import Task from "./Task";

function App() {
  return (
    <div className="container">
      <Task isChecked={true} title="Wash the dishes"></Task>
      <Task isChecked={false} title="Do something"></Task>
      <Task isChecked={true} title="Ablué"></Task>
      <Task></Task>
    </div>
  );
}

export default App;
