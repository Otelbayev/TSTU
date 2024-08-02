import LanguageContexProvider from "./LanguageContext";

const Context = ({ children }) => {
  return <LanguageContexProvider>{children}</LanguageContexProvider>;
};

export default Context;
