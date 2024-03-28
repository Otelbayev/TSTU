import { useContext, createContext } from "react";

const SearchContext = createContext();
export const useTopContext = () => useContext(SearchContext);

const SearchContextProvider = ({ children }) => {
  return <SearchContext.Provider value={"none"}>{children}</SearchContext.Provider>;
};

export default SearchContextProvider;
