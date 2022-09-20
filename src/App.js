import "./App.css";
import Public from "./Routes/Public";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Router>
                <Menu />
        <Container>

          <Public />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
