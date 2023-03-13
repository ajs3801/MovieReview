import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import './header.styles.scss';

const Header = () => {
  const { logOutUser } = useContext(UserContext);

  // This function is called when the user clicks the "Logout" button.
  const logOut = async () => {
    try {
      // Calling the logOutUser function from the user context.
      const loggedOut = await logOutUser();
      // Now we will refresh the page, and the user will be logged out and
      // redirected to the login page because of the <PrivateRoute /> component.
      if (loggedOut) {
        window.location.reload(true);
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" style={{"color":"gold"}}>
            <FontAwesomeIcon icon={faVideo}/> Movie Review
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: '100px'}}
              navbarScroll
            >
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/watchList">watchList</NavLink>
            </Nav>
            <Navbar.Brand href="/login">
              <Button variant="outline-info" className="me-2">Login</Button>
            </Navbar.Brand>
            <Navbar.Brand href="/register">
              <Button variant="outline-info">Register</Button>
            </Navbar.Brand>
            <Button variant="outline-info" onClick={logOut}>Log-out</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;