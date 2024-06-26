import FrontBlogContextProvider from "./BlogContext";
import FrontDepartmentContxtProvider from "./DepartmentContext";
import LanguageContexProvider from "./LanguageContext";
import FrontPersonContextProvider from "./PersonContext";
import PersonContextProvider from "./PersonContext";

const Context = ({ children }) => {
  return (
    <LanguageContexProvider>
      <FrontDepartmentContxtProvider>
        <FrontBlogContextProvider>
          <FrontPersonContextProvider>{children}</FrontPersonContextProvider>
        </FrontBlogContextProvider>
      </FrontDepartmentContxtProvider>
    </LanguageContexProvider>
  );
};

export default Context;
