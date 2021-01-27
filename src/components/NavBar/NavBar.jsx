import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import { fadeInUp } from 'react-animated-css';
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
              <NavbarBrand href="#home" className="mr-auto">
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>

                  <img
                    alt="AkinaSpeedLogo"
                    src="https://i.imgur.com/IMmZb8D.png"
                    height="45"
                    width="185"
                    className="mainLogo d-inline-block align-top"
                  />
                </Animated>
              </NavbarBrand>
            </Container>
          </Navbar>
        </>
      }
    </main>
  );
}