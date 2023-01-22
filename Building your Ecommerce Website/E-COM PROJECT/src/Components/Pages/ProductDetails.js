import React, { Fragment } from "react";
import classes from "./ProductDetails.module.css";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  const params = useParams();

  return (
    <Fragment>
    {params.product_id === "1" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>Album 1</h1>
            <h2>best album of the year</h2>
            <button className={classes.rating}>4.5⭐</button>
            
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>
          <p> Yash </p>
          <p> Best album. Worth buying</p>
          <p>⭐⭐⭐⭐</p>
        </div>
      </section>
    )}
    {params.product_id === "2" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>Album 2</h1>
            <h2>best album of this month</h2>
            <button className={classes.rating}>4.3⭐</button>
            
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>
          <p> vaibhav </p>
          <p> Awesome in cheapest rate</p>
          <p>⭐⭐⭐</p>
          <p> Golu</p>
          <p> best album</p>
          <p>⭐⭐⭐⭐</p>
        </div>
      </section>
    )}

    {params.product_id === "3" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>Album 3</h1>
            <h2>best album of this month</h2>
            <button className={classes.rating}>4.3⭐</button>
           
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>

          <p>Amit </p>
          <p> best album</p>
          <p>⭐⭐⭐⭐</p>
          <p> kartik </p>
          <p> Awesome in cheapest rate</p>
          <p>⭐⭐⭐</p>
        </div>
      </section>
    )}

    {params.product_id === "4" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>Album 4</h1>
            <h2>Latest this week</h2>
            <button className={classes.rating}>2.3⭐</button>
            
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>

          <p> Amit</p>
          <p>not worth buying..</p>
          <p>⭐</p>
          <p> kartik </p>
          <p> Average!!!</p>
          <p>⭐⭐⭐</p>
        </div>
      </section>
    )}
  </Fragment>
);
};

export default ProductDetail;