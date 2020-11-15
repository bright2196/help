import React from "react";
import styles from "./ReturnButton.module.css";
import ArrowButton from "./img/left-arrow.svg";
import { Link } from "react-router-dom";

const ReturnButton = () => {
  return (
    <Link to="/home" className={styles.menuItem}>
      <img
        className={styles.arrowButton}
        src={ArrowButton}
        alt="bouton retour"
      />
    </Link>
  );
};

export default ReturnButton;
