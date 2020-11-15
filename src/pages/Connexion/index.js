import React from "react";

import ButtonNext from "../../components/ButtonNext";

import InputString from "../../components/InputString";
import styles from "./Connexion.module.css";
import GoogleIcon from "./img/googleIcon.svg";
import AppleIcon from "./img/appleIcon.svg";
import FacebookIcon from "./img/facebookIcon.svg";
import { Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div className={styles.containerConnexion}>
      <h2 className={styles.TitreConnexion}>Salut, on se connait ?</h2>

      <div className={styles.inputMail}>
        <InputString
          inputType="email"
          placeHolderInput="Adresse mail"
          color="#2B2B2B"
          backgroundColor="rgba(247, 247, 247, 0.50)"
          fontWeight="500"
        />
      </div>

      <div className={styles.inputMotDePasse}>
        <InputString
          inputType="password"
          placeHolderInput="Mot de passe"
          color="#2B2B2B"
          backgroundColor="rgba(247, 247, 247, 0.50)"
          fontWeight="500"
        />
      </div>
      <div className={styles.boutouSuivant}>
        <Link to="/home">
          <ButtonNext
            name="Suivant"
            color="#F8F8F8"
            backgroundColor="rgba(0, 0, 0, 0.85)"
            fontWeight="700"
          />
        </Link>
      </div>

      <p className={styles.orText}>ou</p>

      <div className={styles.containerIcon}>
        <div className={styles.iconItem1}>
          <img src={FacebookIcon} alt="GoogleIcon" />
        </div>

        <div className={styles.iconItem2}>
          <img src={AppleIcon} alt="AppleIcon" />
        </div>

        <div className={styles.iconItem3}>
          <img src={GoogleIcon} alt="GoogleIcon" />
        </div>
      </div>
    </div>
  );
};

export default Connexion;
