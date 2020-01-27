import React from "react";
import { Col, Image } from "react-bootstrap";
import "./Home.css";

const Steps = props => {
  const { name, heroName } = props;
  return (
    <div>
      <Col xs={12} sm={4} className="person-wrapper text-center">
        <Image src="assets/icon-home-3.svg" circle className="profile-pic" />
        <h3 className="sec-names">{name}</h3>
        <p className="card-matter">{heroName}</p>
      </Col>
    </div>
  );
};
export default Steps;
