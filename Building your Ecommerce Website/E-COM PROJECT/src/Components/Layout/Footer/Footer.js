import classes from "./Footer.module.css";
import logo1 from './Images/facebook.png'
import logo2 from './Images/youtube.png'
import logo3 from './Images/spotify.png'
const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <h1 className={classes.h1}>The Generics </h1>
      <div className={classes.icon}>
        <a
          className={classes["icons-tag"]}
          rel="noreferrer"
          href="https://www.youtube.com"
          target="_blank"
        >
          <img src={logo2} alt="YouTube" />
        </a>
        <a
          className={classes["icons-tag"]}
          rel="noreferrer"
          href="https://www.spotify.com"
          target="_blank"
        >
          <img src={logo3} alt="Spotify" />
        </a>
        <a
          className={classes["icons-tag"]}
          rel="noreferrer"
          href="https://www.facebook.com"
          target="_blank"
        >
          <img src={logo1} alt="Facebook" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
