import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './auth/authButtons';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" >
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
          {isAuthenticated && <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>}
          {/* PLACEHOLDER: render a navigation link to the about page */}
          <AuthButtons />
        </Navbar>
      </>
    )
  }
}

export default withAuth0(Header);


