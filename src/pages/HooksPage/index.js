import React, { useState } from "react";
import HomeLayout from "../../layout";

const Counter = () => {
  const [count] = useState(0);

  return (
    <HomeLayout>
      <div>Timer ! Valeur : {count}</div>
    </HomeLayout>
  );
};

export default Counter;
