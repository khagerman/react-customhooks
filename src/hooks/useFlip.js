import React, { useState } from "react";

// const flipCard = () => {
//   setIsFacingUp((isUp) => !isUp);
// };
const useFlip = () => {
  const [state, setState] = useState(true);
  const flipState = () => {
    setState((state) => !state);
  };
  return [state, flipState];
};
export default useFlip;
