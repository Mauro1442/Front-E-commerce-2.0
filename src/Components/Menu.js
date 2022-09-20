import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import { useContext } from "react";


export default function Menu() {
  const context = useContext(AuthContext)
function handleClick() {
  context.logoutUser();
  localStorage.clear();
}


    return (
      <AuthContext.Consumer>
{
  context=>
  <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          FullStack App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>


{!context.userLogin && <>
<Nav.Link as={Link} to="/log">
              Log In
            </Nav.Link>
            <Nav.Link as={Link} to="/sign">
              Sign Up
            </Nav.Link>

</>}



            


{context.userLogin &&
<>
  <Nav.Link onClick={handleClick}>
              Log Out
            </Nav.Link>

                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link} to="/add">
              Add Item
        
</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/delete">
                Delete Item
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
</>




}


    
          </Nav>
        </Navbar.Collapse>
      </Navbar>
}
      </AuthContext.Consumer>
    );
  }

