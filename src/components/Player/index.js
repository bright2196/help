import React from "react";
import styles from "./Player.module.css";

const Player = () => {
  return (
    <div className={styles.playerContainer}>
      <div className={styles.coverContainer}>
        <p>Cover</p>
      </div>
      <div className={styles.trackInfos}>
        <div className={styles.trackTitle}>
          <p>Title</p>
        </div>
        <div className={styles.trackArtist}>
          <p>Artist</p>
        </div>
      </div>
      <div className={styles.playPauseButton}>
        <p>PlayPausebutton</p>
      </div>
    </div>
  );
};

export default Player;
