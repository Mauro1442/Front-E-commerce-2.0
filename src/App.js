import "./App.css";
import Public from "./Routes/Public";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Container>
        <Menu />
        <Public />
      </Container>
    </Router>
  );
}

export default App;
