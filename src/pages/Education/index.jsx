import React, { useCallback, useEffect, useState } from "react";
import { Title } from "../../components/Generics";
import { Grid } from "../Blog/style";
import { useLanguageContext } from "../../context/LanguageContext";
import { useFrontBlogContext } from "../../context/BlogContext";
import NewsCart from "../../components/News/NewsCart";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";

const Education = () => {
  const { language } = useLanguageContext();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [talim, setTalim] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      const [talimData] = await Promise.all([getBlogs("Ta'lim")]);
      setTalim(talimData);
    };

    fetchAllBlogs();
  }, [getBlogs]);

  return (
    <div className="root-container my-4">
      <div className="root-wrapper">
        <Title title={t("talim.title")} $border="none" />
        <Grid>
          {talim?.map((e) => (
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

export default Education;
