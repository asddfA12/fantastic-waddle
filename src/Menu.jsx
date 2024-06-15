import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          {props.seccion}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="https://didactic-telegram-jjrrxv9597942q447-3000.app.github.dev/">Principal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s1}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s2}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s3}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s4}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s5}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s6}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">
                {props.s7}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;