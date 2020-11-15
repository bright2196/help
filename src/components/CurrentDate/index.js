import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import "moment/locale/fr";

const CurrentTime = () => {
  const date = new Date();
  return <Moment format="dddd DD MMMM y" date={date} />;
};

export default CurrentTime;
