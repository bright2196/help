import React from "react";
import CurrentTime from "../../components/CurrentTime";
import CurrentDate from "../../components/CurrentDate";
import ButtonNext from "../../components/ButtonNext";
import PlayButton from "../../components/PlayButton";
import Layout from "../../layout";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import IconAvatar from "../../components/AvatarIcon";

const Home = () => {
  return (
    <Layout>
      <div className={styles.infosTop}>
        <div className={styles.homeDateContainer}>
          <h1 className={styles.homeDate}>
            <CurrentDate />
          </h1>
          <h2 className={styles.homeTime}>
            Il est <CurrentTime />
          </h2>
        </div>
        <Link to="/mon-compte">
          <IconAvatar />
        </Link>
      </div>
      <div className={styles.container}>
        <div className={styles.playbutton}>
          <PlayButton />
        </div>
        <div className={styles.nextbutton}>
          <Link to="/ambiance" className={styles.menuItem}>
            <ButtonNext
              name="Toutes nos ambiances"
              color="#F8F8F8"
              backgroundColor="rgba(0, 0, 0, 0.85)"
              fontWeight="700"
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
