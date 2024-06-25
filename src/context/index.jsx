import FrontBlogContextProvider from "./BlogContext";
import FrontDepartmentContxtProvider from "./DepartmentContext";
import LanguageContexProvider from "./LanguageContext";
import PersonContextProvider from "./PersonContext";

const Context = ({ children }) => {
  return (
    <LanguageContexProvider>
      <FrontDepartmentContxtProvider>
        <FrontBlogContextProvider>
          <PersonContextProvider>{children}</PersonContextProvider>
        </FrontBlogContextProvider>
      </FrontDepartmentContxtProvider>
    </LanguageContexProvider>
  );
};

export default Context;
