import React from "react";
import HomeLayout from "../../layout";
import styles from "./MyAccount.module.css";
import ReturnButton from "../../components/ReturnButton";
import AccountHeader from "../../components/MyAccountHeader";
import Text from "../../components/Text";
import Checkbox from "../../components/Checkbox";

const MyAccount = () => {
  return (
    <div>
      <ReturnButton />
      <h1 className={styles.titreMyAccount}>Mon compte</h1>
      <HomeLayout />
      <div className={styles.myAccountContainer}>
        <AccountHeader />
      </div>
      <div className={styles.textContainer}>
        <Text nameLink="A propos" fontWeightLink="700" fontSizeLink="16px" />

        <Text
          nameLink="Connexion à d’autres applications"
          fontWeightLink="700"
          fontSizeLink="16px"
          nameSubtitle="Connecte-toi à d’autres applis pour une expérience optimale."
          fontWeightSubtitle="400"
          fontSizeSubtitle="12px"
        />

        <Text
          nameLink="Conditions Générale d’utilisation"
          fontWeightLink="700"
          fontSizeLink="16px"
          nameSubtitle="Tout ce qu’il faut savoir."
          fontWeightSubtitle="400"
          fontSizeSubtitle="12px"
        />

        <Text
          nameLink="Politique de confidentialité"
          fontWeightLink="700"
          fontSizeLink="16px"
          nameSubtitle="Important autant pour toi que pour nous"
          fontWeightSubtitle="400"
          fontSizeSubtitle="12px"
        />

        <Text
          nameLink="Assistance"
          fontWeightLink="700"
          fontSizeLink="16px"
          nameSubtitle="Laisse notre équipe et nos utilisateurs t’aider"
          fontWeightSubtitle="400"
          fontSizeSubtitle="12px"
        />

        <Text nameLink="Déconnexion" fontWeightLink="700" fontSizeLink="16px" />
      </div>
      <div className={styles.anims}>
        Désactiver les animations <Checkbox />
      </div>
    </div>
  );
};

export default MyAccount;
