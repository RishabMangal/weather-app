import "./App.css";
import Geo from "./Geo";
import Home from "./Home";
// import * as V from "victory";

function App() {
  return (
    <div className="App">
      <Geo></Geo>
      {localStorage.getItem("weather") ? <Home></Home> : "Loading..."}
    </div>
  );
}

export default App;
