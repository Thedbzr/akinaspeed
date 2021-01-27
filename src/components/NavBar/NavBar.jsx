import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { Navbar, Nav, NavbarBrand, Container, Col, Row } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <main>
      { user ?
        <>
          <Navbar>
            <NavLink exact activeStyle={{ backgroundColor: 'yellow' }} to="/orders">Order History</NavLink>
            &nbsp; | &nbsp;
            <NavLink exact activeStyle={{ backgroundColor: 'yellow' }} to="/orders/new">New Order</NavLink>
              &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
              &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
          </Navbar>
        </>
        :
        <>
          <Navbar>
            <Container>
              <Row>
                <Col></Col>
                <Col xs={11}>
                  <NavbarBrand href="#home" className="mr-auto">
                    <img
                      alt="AkinaSpeedLogo"
                      src="https://i.imgur.com/IMmZb8D.png"
                      height="45"
                      width="185"
                      className="mainLogo d-inline-block align-top"
                    />
                  </NavbarBrand>
                </Col>
                <Col >
                  <Nav>
                    <NavLink exact activeStyle={{ backgroundColor: "black" }} to="/login"><PersonCircle height="8vmin" width="5vmin" className="icons" /></NavLink>
                  </Nav>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </>
      }
    </main>
  );
}