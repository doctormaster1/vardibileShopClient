import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import ProductCard from "../components/main/ProductCard";
import "../styles/main.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home-card">
        <Container fluid>
          <Row>
            <Col key={1} xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProductCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
