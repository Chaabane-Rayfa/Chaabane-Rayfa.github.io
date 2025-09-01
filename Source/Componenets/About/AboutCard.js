import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rayfa Chaabane </span>
            from <span className="purple"> Tunisia.</span>
            <br />
            I am Electircal Engineer.
            <br />
            I am about to complete my Master Thesis at Roche Diagnostic GmbH.
            <br />
            <br />
            Apart from coding, Desiging, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rayfa Chaabane</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
