import FrontBlogContextProvider from "./BlogContext";
import LanguageContexProvider from "./LanguageContext";

const Context = ({ children }) => {
  return (
    <LanguageContexProvider>
      <FrontBlogContextProvider>{children}</FrontBlogContextProvider>
    </LanguageContexProvider>
  );
};

export default Context;
