import { EthProvider } from "./contexts/EthContext";
import Demo from "./components/Demo";
import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Demo />
          <hr />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
