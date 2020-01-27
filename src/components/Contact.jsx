import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Image src="assets/contact.jpg" className="header-image" />
        <Grid>
          <Row>
            {/* hlh */}
            <Col xs={12} sm={8} className="main-section">
              <form>
                <center>
                  <h2 className="contact-title">Reach Us</h2>
                </center>
                <Col md={6}>
                  <label className="form-label"> Name </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label">Email </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label"> Phone </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                  />
                </Col>
                <Col md={6}>
                  <label className="form-label"> Message </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    required
                  />
                </Col>

                <center>
                  <Button
                    type="submit"
                    className="contact-button"
                    bsStyle="primary"
                  >
                    Submit
                  </Button>
                </center>
              </form>
              <br />
            </Col>
            <br />
            <Col xs={12} sm={4} className="sidebar-section">
              <p className="icons">
                <i className="icons" class="fa fa-envelope">
                  &nbsp; info@machinedoctors.com
                </i>
                <br />

                <i className="icons" class="fa fa-phone">
                  &nbsp; +91-987654321
                </i>
              </p>

              <p className="contact-desc">
                Since opening, Machine Doctors dedication to customer
                satisfaction has helped them build a loyal and wonderful
                customer base, as well as a long-standing, excellent team of
                automotive professionals.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
