import React, { Component } from "react";
import { Grid, Col } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <Image src="assets/about-cover.jpg" className="header-image" /> */}
        <Grid>
          <Col xs={12} sm={12}>
            <h3 className="about-title">About Machine Doctors</h3>
            <p className="about-desc">
              Machine Doctors was operated right here in our hometown
              <span className="brand-name"> Kukatpally Hyderabad,</span> to
              provide high quality and dependable auto repairs and services By
              picking the nearest shops Using GPS Tracking. The Service team
              emphasizes three important traits of our business: honesty,
              quality, and transparency. These traits have been the driving
              force of our business, and we aim to provide them to every
              customer that steps into our shop.
            </p>
            <p className="about-desc">
              You’ll notice this the moment you enter our facility, as our ASE
              Certified service advisors are ready and waiting to help you. Our
              advisors take the time to understand what’s going on with your
              vehicle, your spending limit, and its driving history. Using that
              information, they’ll create and walk you through a personalized
              service plan that aims to handle every issue your vehicle is
              experiencing.
            </p>
            <p className="about-desc">
              During the service, our advisors will also provide you with status
              updates via your preferred form of communication, so you always
              know what’s going on with your vehicle. Our advisors make sure you
              have all the information you need to make the best decisions for
              your vehicle. We can’t wait for you to work with them!
            </p>
            <p className="about-desc">
              Since opening, Machine Doctors dedication to customer satisfaction
              has helped them build a loyal and wonderful customer base, as well
              as a long-standing, excellent team of automotive professionals.
            </p>
            <br />
            <br />
            <br />
            <br />
            <p className="about-desc"></p>
            <p className="about-desc"></p>
            <p className="about-desc"></p>
            <p className="about-desc"></p>
          </Col>
        </Grid>
      </div>
    );
  }
}
