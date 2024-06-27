import React, { useCallback, useEffect, useState } from "react";
import { Title } from "../../components/Generics";
import { useLanguageContext } from "../../context/LanguageContext";
import axios from "axios";
import NewsCart from "../../components/News/NewsCart";
import { Grid } from "../Blog/style";

const Announcements = () => {
  const { language } = useLanguageContext();

  const [student, setStudent] = useState([]);

  const fetchUzBlogs = async (title) => {
    const response = await axios.get(
      `/api/blogcontroller/sitegetallblog?blog_category=${title}`
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
          `/api/blogcontroller/sitegetallblogtranslation?language_code=${language}&blog_category=${translationResponse.data?.title}`
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
      const [studentData] = await Promise.all([getBlogs("E'lon")]);

      setStudent(studentData);
    };

    fetchAllBlogs();
  }, [getBlogs]);
  return (
    <div className="root-container my-4">
      <div className="root-wrapper">
        <Title title="E'lonlar" $border="none" />
        <Grid>
          {student?.map((e) => (
            <NewsCart
              dataAos="zoom-in"
              onClick={() => navigate(`/${language}/blog/${e.id}`)}
              key={e.id}
              prop={e}
            />
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Announcements;
