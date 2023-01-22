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
            src="https://www.pngitem.com/pimgs/m/0-543_grand-theft-auto-6-logo-hd-png-download.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>GTA 6</h1>
            <h2>Game of the year</h2>
            <button className={classes.rating}>9.9⭐</button>
            
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Gamers Reviews </h5>
          <p> Viru </p>
          <p> Best game. Worth buying</p>
          <p>⭐⭐⭐⭐</p>
          <p> Gowda </p>
          <p> Amazing</p>
          <p>⭐⭐⭐⭐</p>
          <p> Vikram </p>
          <p> Worth the wait XD</p>
          <p>⭐⭐⭐⭐⭐</p>


        </div>
      </section>
    )}
    {params.product_id === "2" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://cdn-icons-png.flaticon.com/512/871/871360.png"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>Assasian's Creed</h1>
            <h2>Top Game</h2>
            <button className={classes.rating}>9.0⭐</button>
            
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>
          <p> Guru </p>
          <p> Awesome in cheapest rate</p>
          <p>⭐⭐⭐</p>
          <p> Lokesh</p>
          <p> best game</p>
          <p>⭐⭐⭐⭐</p>
        </div>
      </section>
    )}

    {params.product_id === "3" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d9t1k4q-50dc6179-13c7-4034-a7f4-2d93328f3ce7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDl0MWs0cS01MGRjNjE3OS0xM2M3LTQwMzQtYTdmNC0yZDkzMzI4ZjNjZTcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.10nLPZnEpCAtDjkPUAWOzU8772PkirrwkHU_c-yFzQo"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>NFS MW</h1>
            <h2>Best racing game</h2>
            <button className={classes.rating}>8.3⭐</button>
           
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>

          <p>Rakesh </p>
          <p> best game</p>
          <p>⭐⭐⭐⭐</p>
          <p> Adiya </p>
          <p> Awesome in cheapest rate</p>
          <p>⭐⭐⭐</p>
        </div>
      </section>
    )}

    {params.product_id === "4" && (
      <section className={classes.sections}>
        <div >
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d9sqfrc-a54bc5d8-58a9-4f4e-89f0-e943b233d33f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZDlzcWZyYy1hNTRiYzVkOC01OGE5LTRmNGUtODlmMC1lOTQzYjIzM2QzM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-TVOAqprQpcM2tIaahIFVThiy8PrWGRkdwpTrCnbNzU"
            alt="Website"
            className={classes.img}
          ></img>
          <div className={classes.details}>
            <h1 className={classes.title}>FARCRY 7</h1>
            
            <button className={classes.rating}>9.3⭐</button>
            
          </div>
        </div>
        <div className={classes.reviews}>
          <h5> Reviews </h5>

          <p> John</p>
          <p>worth every rupee..</p>
          <p>⭐⭐⭐⭐</p>
          <p> Tyrion </p>
          <p> best!!!</p>
          <p>⭐⭐⭐</p>
        </div>
      </section>
    )}
  </Fragment>
);
};

export default ProductDetail;