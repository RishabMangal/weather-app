import "./App.css";
import Geo from "./Geo";
function App() {
  return (
    <div className="App">
      <Geo></Geo>
      {/* {localStorage.getItem("weather") ? <Home></Home> : "Loading..."} */}
    </div>
  );
}

export default App;
