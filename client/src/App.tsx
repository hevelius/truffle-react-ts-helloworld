import React from 'react';
import { EthProvider } from "./contexts/EthContext"
import Demo from "./components/Demo"
import "./App.css"

const App = ():React.ReactElement => (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Demo />
          <hr />
        </div>
      </div>
    </EthProvider>
  );

export default App
