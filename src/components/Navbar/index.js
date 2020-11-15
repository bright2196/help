import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import calendarIcon from "./assets/Calendar/calendar.svg";
import homeIcon from "./assets/Home/home.svg";
import heartIcon from "./assets/Heart/heart.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.menu}>
        <li>
          <Link to="/mon-agenda" className={styles.menuItem}>
            <img
              className={styles.calendarIcon}
              src={calendarIcon}
              alt="agenda icon"
            />
            <p className={styles.Subtitles}>Mon agenda</p>
          </Link>
        </li>
        <li>
          <Link to="/home" className={styles.menuItem}>
            <img className={styles.homeIcon} src={homeIcon} alt="home icon" />
            <p className={styles.Subtitles}>Accueil</p>
          </Link>
        </li>
        <li>
          <Link to="/mes-likes" className={styles.menuItem}>
            <img
              className={styles.heartIcon}
              src={heartIcon}
              alt="heart icon"
            />
            <p className={styles.Subtitles}>Mes likes</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
