import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Services.css";

export default class Services extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>Services</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Comming Soon!</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>Comming Soon!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
