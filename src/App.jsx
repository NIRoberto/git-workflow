import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Landing from "./pages/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Routing basics</h1>
        <Landing />
      </div>
    </>
  );
}

export default App;
