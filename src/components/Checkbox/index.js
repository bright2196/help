import React from "react";
import Lottie from "react-lottie";
// import styles from "./Checkbox.modules.css";
import animationData from "../../components/lotties/checkbox.json";

export default function Checkbox() {
  const defaultOptions = {
    mode: "OnClick",
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={180} width={180} />
    </div>
  );
}
