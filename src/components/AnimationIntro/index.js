
import React from "react"
import Lottie from "react-lottie";

import animationData from '../../components/lotties/AnimationLogo.json';

export default function AnimationLogo() {
  const defaultOptions = {
     
      mode:"OnClick",
      animationData: animationData,
      
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        
      }
      
    };
  
  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={180}
        width={180}
      />
    </div>
  );
}




