import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const EditModal = (props) => {
  const id = document.getElementById("EditModalOverlay");
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, id)}
      {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>, id)}
    </React.Fragment>
  );
};

export default EditModal;