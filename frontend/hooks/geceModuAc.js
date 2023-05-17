import { useState } from "react";
import { useLocalStorage } from "./localStorageKullan";

export const useGeceModu = () => {
  const [geceModu, setGeceModu] = useState(false);

  const changeHandler = (e) => {
    setGeceModu(!geceModu);
  };
  return [geceModu, changeHandler];
};
