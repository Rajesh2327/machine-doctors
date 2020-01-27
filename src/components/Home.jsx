import React, { Component } from "react";

import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import Steps from "./Steps";

import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image src="assets/welcome.jpg" className="header-image" />

        <div class="centered">
          <span className="home-title">Find Doctor For your Vehicle</span>
          <br />
          <input
            type="text"
            placeholder="Your Current Location"
            class="control"
            id="locationTextField"
          ></input>
          <Button className="search" bsStyle="primary">
            Search
          </Button>
        </div>
        <Grid>
          <center>
            <h2 className="flow-title">HOW IT WORKS</h2>
          </center>
          <Steps
            className="flow"
            name="Find A Doctor"
            heroName="Find Doctor by Enter your current location Using Web application
                Or Mobile App"
          ></Steps>
          <Steps
            name="View Profile"
            heroName=" By Selecting the neartest Service Shop to your location for your
                Service"
          ></Steps>
          <Steps
            name="Schedule A Service"
            heroName="Drop Your Repairs and Schedule A Service to your Vehicle"
          ></Steps>
          {/* <Row className="show-grid text-center">
            <h2 className="flow-title">HOW IT WORKS</h2>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="assets/icon-home-1.svg"
                circle
                className="profile-pic"
              />
              <h3 className="sec-names">Find A Doctor</h3>
              <p className="card-matter">
                Find Doctor by Enter your current location Using Web application
                Or Mobile App
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="assets/icon-home-2.svg"
                circle
                className="profile-pic"
              />
              <h3 className="sec-names">View Profile</h3>
              <p className="card-matter">
                By Selecting the neartest Service Shop to your location for your
                Service
              </p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="assets/icon-home-3.svg"
                circle
                className="profile-pic"
              />
              <h3 className="sec-names">Schedule A Service</h3>
              <p className="card-matter">
                Drop Your Repairs and Schedule A Service to your Vehicle
              </p>
            </Col>
          </Row> */}
        </Grid>
        <Grid>
          <Row>
            <Col md={6} sm={4} className="sidebar-section">
              <br />
              <br />
              <br />
              <br />
              <Col></Col>
              <h2 md={6}>
                <p className="app-download">
                  Download <span className="app">Machine Doctors</span>
                  <br />
                  App Coming Soon!
                </p>
              </h2>
              <p className="app-desc">
                Does your Bike, Car, Truck or SUV need some care and attention?
                Let our Certified technicians take a look under the hood today.
                Our service advisor works closely with technicians and customers
                to provide transparent information and counsel.
              </p>
              <Col md={4}>
                <Image className="app" src="assets/apple_app.png" />
              </Col>
              <Col md={4}>
                <Image className="app" src="assets/google_play_app.png" />
              </Col>
            </Col>
            <Col md={6} sm={4} className="sidebar-section">
              <Image src="assets/map.jpg" />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
