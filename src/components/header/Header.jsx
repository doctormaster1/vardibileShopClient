import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from "./SearchBox";
import * as routes from "../../constants/routes";
import "../../styles/header.scss";

export default class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to={routes.HOME}>
              <Navbar.Brand>vardibile Shop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <SearchBox />
          </Container>
        </Navbar>
      </header>
    );
  }
}
