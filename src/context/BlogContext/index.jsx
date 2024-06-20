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

  const { language } = useLanguageContext();

  const getAllFavoriteBlogs = async () => {
    const res = await axios.get(
      language === "uz"
        ? "/api/blogcontroller/sitegetallblog?favorite=true"
        : `/api/blogcontroller/sitegetallblogtranslation?language_code=${language}&favorite=true`
    );
    if (res.status) {
      setNews(res?.data?.sort((a, b) => a?.position - b?.position));
    }
  };

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
      "/api/blogcategorycontroller/sitegetallblogcategory"
    );
    if (categoryResponse.status === 200) {
      const category = categoryResponse.data.find((e) => e.title === titleuz);
      if (category) {
        const translationResponse = await axios.get(
          `/api/blogcategorycontroller/sitegetbyuzidblogcategorytranslation/${category.id}?language_code=${language}`
        );
        if (translationResponse.status === 200) {
          const blogsResponse = await axios.get(
            `/api/blogcontroller/sitegetallblogtranslation?blog_category=${translationResponse.data?.title}&favorite=true`
          );
          if (blogsResponse.status === 200) {
            return blogsResponse.data;
          }
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
      const [newsData, eventsData, studentData] = await Promise.all([
        getBlogs("yangiliklar"),
        getBlogs("tadbirlar"),
        getBlogs("talaba hayoti"),
      ]);

      setNews(newsData);
      setEvents(eventsData);
      setStudent(studentData);
    };

    fetchAllBlogs();
  }, [getBlogs]);

  return (
    <FrontBlogContext.Provider value={{ news, events, student }}>
      {children}
    </FrontBlogContext.Provider>
  );
};

export default FrontBlogContextProvider;
