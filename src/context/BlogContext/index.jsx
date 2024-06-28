import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useLanguageContext } from "../LanguageContext";
import axios from "axios";

const FrontBlogContext = createContext();

export const useFrontBlogContext = () => useContext(FrontBlogContext);

const FrontBlogContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [student, setStudent] = useState([]);
  const [talim, setTalim] = useState([]);

  const { language } = useLanguageContext();

  const fetchUzBlogs = async (title) => {
    const response = await axios.get(
      `/api/blogcontroller/sitegetallblog?blog_category=${title}&favorite=true`
    );
    if (response.status === 200) {
      return response.data;
    }
    return [];
  };

  const fetchTranslatedBlogs = async (titleuz) => {
    const categoryResponse = await axios.get(
      `/api/blogcategorycontroller/sitegetbytitleblogcategory/${titleuz}`
    );
    if (categoryResponse.status === 200) {
      const translationResponse = await axios.get(
        `/api/blogcategorycontroller/sitegetbyuzidblogcategorytranslation/${categoryResponse.data?.id}?language_code=${language}`
      );
      if (translationResponse.status === 200) {
        const blogsResponse = await axios.get(
          `/api/blogcontroller/sitegetallblogtranslation?language_code=${language}&blog_category=${translationResponse.data?.title}&favorite=true`
        );
        if (blogsResponse.status === 200) {
          return blogsResponse.data;
        }
      }
    }
    return [];
  };

  const getBlogs = useCallback(
    async (titleuz) => {
      if (language === "uz") {
        return await fetchUzBlogs(titleuz);
      } else {
        return await fetchTranslatedBlogs(titleuz);
      }
    },
    [language]
  );

  useEffect(() => {
    const fetchAllBlogs = async () => {
      const [newsData, eventsData, studentData, talimData] = await Promise.all([
        getBlogs("Yangiliklar"),
        getBlogs("Tadbirlar"),
        getBlogs("Talaba hayoti"),
        getBlogs("Ta'lim"),
      ]);

      setNews(newsData?.sort((a, b) => a.position - b.position));
      setEvents(eventsData);
      setStudent(studentData);
      setTalim(talimData);
    };

    fetchAllBlogs();
  }, [getBlogs]);

  return (
    <FrontBlogContext.Provider value={{ news, events, student, talim }}>
      {children}
    </FrontBlogContext.Provider>
  );
};

export default FrontBlogContextProvider;
