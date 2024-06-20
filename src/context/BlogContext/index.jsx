import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useLanguageContext } from "../LanguageContext";

const FrontBlogContext = createContext();

export const useFrontBlogContext = () => useContext(FrontBlogContext);

const FrontBlogContextProvider = ({ children }) => {
  const { language } = useLanguageContext();

  const [blogData, setBlogData] = useState({
    news: [],
    events: [],
    student: [],
  });
  const [blogCategoryOptions, setBlogCategoryOptions] = useState([]);

  const fetchBlogData = useCallback(
    async (categoryTitle, stateKey) => {
      const id = blogCategoryOptions.find((e) => e.title === categoryTitle)?.id;
      const res = await axios.get(
        language === "uz"
          ? `/api/blogcontroller/sitegetallblog?blog_category=${categoryTitle}&favorite=true`
          : `/api/blogcontroller/sitegetbyuzidblogtranslation/${id}?language_code=${language}`
      );
      if (res.status === 200) {
        setBlogData((prevData) => ({
          ...prevData,
          [stateKey]: res.data,
        }));
      }
    },
    [blogCategoryOptions, language]
  );

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "/api/blogcategorycontroller/sitegetallblogcategory"
      );
      const data = await res.json();
      setBlogCategoryOptions(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (blogCategoryOptions.length > 0) {
      fetchBlogData("yangilikar", "news");
      fetchBlogData("tadbirlar", "events");
      fetchBlogData("talaba hayoti", "student");
    }
  }, [language, blogCategoryOptions, fetchBlogData]);

  return (
    <FrontBlogContext.Provider value={blogData}>
      {children}
    </FrontBlogContext.Provider>
  );
};

export default FrontBlogContextProvider;
