import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

// sign out firabase function
import { signOutUser } from "../../utils/firebase.utils";

import './header.styles.scss';

const Header = () => {
  const { currentUser } = useContext(UserContext);

  // sign out button handler
  const signOutHandler = async () => {
    await signOutUser();
  };

  const checkCurrentUser = () => {
    
    console.log(currentUser ? "exist" : "None");
  };

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
            {
              !currentUser ?
              (
                <div className="authentication">
                  <Navbar.Brand href="/login">
                    <Button variant="outline-info" className="me-2">Login</Button>
                  </Navbar.Brand>
                  <Navbar.Brand href="/register">
                    <Button variant="outline-info">Register</Button>
                  </Navbar.Brand>
                </div>
              )
              :
              (
                <Button variant="outline-info" onClick={signOutHandler}>Log out</Button>
              )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;