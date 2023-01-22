import React from 'react';
import image from "../Images/download.jfif";
import classes from './AboutUs.module.css';

const About = () => {
  return (
    <section className={classes.section}>
      
      <h2 className={classes.h2}>ABOUT</h2>
      <div>
        <img
          src={image}
          alt='Musical Band'
        />
        <p>
          Game purchasing website by Hrithik. part of sharpener's react module 
        </p>
      </div>
    </section>
  );
};

export default About;