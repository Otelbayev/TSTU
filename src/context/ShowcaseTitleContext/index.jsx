import { createContext, useContext, useState } from "react";

const ShowcaseTitleContext = createContext();

export const useShowcaseTitleContext = () => useContext(ShowcaseTitleContext);

const ShowcaseTitleContextProvider = ({ children }) => {
  const [title, setTitle] = useState("no title");
  return (
    <ShowcaseTitleContext.Provider value={{ title, setTitle }}>
      {children}
    </ShowcaseTitleContext.Provider>
  );
};

export default ShowcaseTitleContextProvider;
