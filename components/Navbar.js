import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Logo from '../images/turbodirect.png'
import './css/navbar.css'
import {Link} from 'react-router-dom';



class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render(){
    return (
      <div>
       <Navbar color="light" light expand="md" >
          <NavbarBrand to="/"><a href="/"><img className="logo" src={Logo} alt="Turbo Direct Logo" /></a></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/" onClick={this.toggle}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/shop" onClick={this.toggle}>Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact" onClick={this.toggle}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/cart" onClick={this.toggle}><i className="material-icons">shopping_cart</i></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    )
}
}

export default Navigation;