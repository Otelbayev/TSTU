import React, { useCallback, useEffect, useState } from "react";
import UniShowcase from "./../../components/UniShowcase/index";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "../../context/LanguageContext";
import { useFrontBlogContext } from "../../context/BlogContext";
import { Grid } from "../Blog/style";
import NewsCart from "../../components/News/NewsCart";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentLife = () => {
  const { t } = useTranslation();
  const { language } = useLanguageContext();
  const navigate = useNavigate();
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
      const [studentData] = await Promise.all([getBlogs("Talaba hayoti")]);

      setStudent(studentData);
    };

    fetchAllBlogs();
  }, [getBlogs]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <UniShowcase title={t("student.title")} />
      <div className="root-container">
        <div className="root-wrapper">
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
    </div>
  );
};

export default StudentLife;
