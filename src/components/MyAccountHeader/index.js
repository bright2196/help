import React from "react";
import IconAvatar from "../AvatarIcon";
import styles from "./AccountHeader.module.css";

const AccountHeader = () => {
  return (
    <div className={styles.AccountHeaderContainer}>
      <IconAvatar />
      <div className={styles.textContainer}>
        <h2>Claire Rieusset</h2>
        <a href="/modifier-mon-profil" className={styles.linkModify}>
          <p>Voir votre profil</p>
        </a>
      </div>
    </div>
  );
};

export default AccountHeader;
