import { Link, NavLink } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { Navbar, Nav, NavbarBrand, Container } from 'react-bootstrap';
import { Animated } from "react-animated-css";
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
            <Container id="usrNav">
              <NavbarBrand href="/">
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
              <NavLink className="navLinkTags" exact activeStyle={{ backgroundColor: 'red' }} to="/orders">Order History</NavLink>
              &nbsp; | &nbsp;
              <NavLink className="navLinkTags"  exact activeStyle={{ backgroundColor: 'red' }} to="/orders/new">New Order</NavLink>
                &nbsp; | &nbsp;
              <NavLink  className="navLinkTags" exact activeStyle={{ backgroundColor: 'red' }} to="/orders/cart">Cart</NavLink>
                &nbsp; | &nbsp;
              <span>Welcome, {user.name}</span>
                &nbsp;&nbsp;<Link className="navLinkTags" activeStyle={{ backgorundColor: 'red' }} to="" onClick={handleLogOut}>Log Out</Link>
            </Container>
          </Navbar>
        </>
        :
        <>
          <Navbar>
            <Container>
              <NavbarBrand href="/" className="mr-auto">
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