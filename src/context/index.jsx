import LanguageContexProvider from "./LanguageContext";
import SearchContextProvider from "./SearchContext";

const Context = ({ children }) => {
  return (
    <LanguageContexProvider>
      <SearchContextProvider>{children}</SearchContextProvider>
    </LanguageContexProvider>
  );
};

export default Context;
