import { Fragment } from "react";
import { Card, Row,Col,Button } from "react-bootstrap";
import "./Home2.css";
import Icon from "../Images/icon.ico";

const Home2 = () => {
  return (<Fragment>
    <div className="Div">
    <Row >
      <Col className="text-center" style={{    textAlign: "center"}}>
        <Button
          variant="primary"
          style={{ fontSize: "25px" }}
          className="btn"
        >
          LATEST GAMES OF 2023
        </Button>{" "}
        <br />
        <a rel="noreferrer" href="/" target="_blank">
          <img src={Icon} alt="Play" />
        </a>
      </Col>
    </Row>
  </div>
  <h2 className="h2"> UPCOMING GAMES IN 2023! </h2>




    <div className="div">
      <div className="tour-item">
        <span className="tour-dates">JAN 25</span>
        <span className="tour-dates">INDIA, BNG</span>
        <span className="spec">GTA 6</span>

        <button className="buy">PRE-ORDER</button>
      </div>
      <div className="tour-item">
        <span className="tour-dates">FEB 20</span>
        <span className="tour-dates">USA, NEWYORK</span>
        <span className="spec">ASSASIANS CREED</span>

        <button className="buy">PRE-ORDER</button>
      </div>
      <div className="tour-item">
        <span className="tour-dates">MAR 18</span>
        <span className="tour-dates">AUS, SYDNEY</span>
        <span className="spec">NFS MW</span>

        <button className="buy">PRE-ORDER</button>
      </div>
      <div className="tour-item">
        <span className="tour-dates">APR 10</span>
        <span className="tour-dates">CAN , TORONTO</span>
        <span className="spec">FARCRY 7</span>

        <button className="buy">PRE-ORDER</button>
      </div>
    
    </div>
    </Fragment>
  );
};
export default Home2;
