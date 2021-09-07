import React, { useState } from "react";
import axios from "axios";
import uuid from "uuid";

const useAxios = (url) => {
  const [state, setState] = useState([]);
  const addCard = async (name) => {
    let urlName = name ? `${url}/${name}` : url;
    const response = await axios.get(urlName);
    setState((state) => [...state, { ...response.data, id: uuid() }]);
    console.log(state);
  };
  return [state, addCard];
};
export default useAxios;

//   const [cards, setCards] = useState([]);
//   const addCard = async () => {
//     const response = await axios.get(
//       "https://deckofcardsapi.com/api/deck/new/draw/"
//     );
//     setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
//   };
