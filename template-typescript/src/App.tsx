import React, { Component } from "react";
import Experience from "./components/Experience/Experience";
import Resume from "./pages/resume/Resume";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Resume />
        </header>
      </div>
    );
  }
}

export default App;
