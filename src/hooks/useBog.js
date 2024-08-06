import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const useBlog = (title, favo, pagination) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = new URLSearchParams(location.search);
  const def = url.get("page");

  const [page, setPage] = useState(def || 1);
  const [query, setQuery] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          i18n.language === "uz"
            ? `${
                import.meta.env.VITE_BASE_URL_API
              }/blogcontroller/sitegetallblog?blog_category=${title}&favorite=${favo}${
                pagination ? `&pageNum=${page}` : ""
              }`
            : `${
                import.meta.env.VITE_BASE_URL_API
              }/blogcontroller/sitegetallblogtranslation?language_code=${
                i18n.language
              }&blog_category_uz=${title}${favo ? "&favorite=true" : ""}${
                pagination ? `&pageNum=${page}` : ""
              }`
        );
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language, title, favo, page, query]);

  return { data, loading, error, page, setPage, query, setQuery };
};
