import FrontBlogContextProvider from "./BlogContext";
import FrontDepartmentContxtProvider from "./DepartmentContext";
import LanguageContexProvider from "./LanguageContext";

const Context = ({ children }) => {
  return (
    <LanguageContexProvider>
      <FrontDepartmentContxtProvider>
        <FrontBlogContextProvider>{children}</FrontBlogContextProvider>
      </FrontDepartmentContxtProvider>
    </LanguageContexProvider>
  );
};

export default Context;
