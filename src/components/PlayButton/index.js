import React, { useState } from "react";
import Lottie from "react-lottie";
import styles from "./PlayButton.module.css";
import animationDataBlob from "./assets/blob.json";
import pauseIcon from "./assets/pause.svg";
import playIcon from "./assets/play.svg";

const PlayButton = () => {
  const defaultOptionsBlob = {
    loop: true,
    autoplay: true,
    animationData: animationDataBlob,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [src, updateSrc] = useState(playIcon);

  const togglePlay = () => {
    if (src === pauseIcon) {
      updateSrc(playIcon);
    } else {
      updateSrc(pauseIcon);
    }
  };

  return (
    <div>
      <div className={styles.blobWrapper}>
        <Lottie
          className={styles.lottieBlob}
          options={defaultOptionsBlob}
          height={300}
          width={300}
        />
        <div className={styles.playPauseButtonContainer}>
          <button className={styles.playPauseButton} onClick={togglePlay}>
            <img className={styles.pauseIcon} src={src} alt="pause icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
