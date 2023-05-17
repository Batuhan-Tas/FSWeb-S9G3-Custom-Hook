import { useState } from "react";

export const useLocalStorage = (baslangicDegeri) => {
  const [keyValue, setKeyValue] = useState();

  return [keyValue, setKeyValue];
};
