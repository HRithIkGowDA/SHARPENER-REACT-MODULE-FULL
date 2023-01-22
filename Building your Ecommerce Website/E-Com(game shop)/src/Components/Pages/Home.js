import { Fragment } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Icon from "../Images/icon.ico";
import classes from "./Home.css";
import "./Home.css";
const Home = () => {
  return (
    <Fragment>
      <div className="div">
        <Row>
          <Col className="text-center">
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
      <h2 className="h2"> ANNOUNCEMENTS </h2>

      <section>
        <div className="para">
          <p>
            {" "}
            JAN 25 INDIA. GTA 6 {" "}
            <button className="button1">PRE-ORDER</button>{" "}
          </p>
          <hr />
          <p>
            {" "}
            FEB 03 FAR CRY ,NEW YORK <button className="button1">PRE-ORDER</button>
          </p>
          <hr />
          <p>
            MAR 16 ASSASIANS CREED,SYDNEY <button className="button1">PRE-ORDER</button>
          </p>
          <hr />
          <p>
            APR 21 NFS MOST WANTED,BANGALORE <button className="button1">PRE-ORDER</button>
          </p>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
