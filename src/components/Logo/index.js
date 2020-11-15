import React from "react";
import LogoAdapt from "./img/Adapt_logo.svg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img className={styles.Logo} src={LogoAdapt} alt="Logo Adapt" />
    </div>
  );
};

export default Logo;
