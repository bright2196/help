import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";

const CurrentTime = () => {
  return <Moment interval={1000} format="HH:mm" />;
};

export default CurrentTime;
