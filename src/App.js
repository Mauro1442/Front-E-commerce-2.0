import "./App.css";
import Public from "./Routes/Public";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Components/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Public />
    </Router>
  );
}

export default App;
