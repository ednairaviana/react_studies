import CardIndex from "./CardIndex";
import CardModule from "./CardModule/CardModule";
import CardInline from "./CardInline";

function App() {
  return (
    <div className="container">
      <CardIndex></CardIndex>
      <CardModule></CardModule>
      <CardInline></CardInline>
    </div>
  );
}

export default App;
