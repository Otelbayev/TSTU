import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useBlog = (title, favo) => {
  const { i18n } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          i18n.language === "uz"
            ? `${
                import.meta.env.VITE_BASE_URL_API
              }/blogcontroller/sitegetallblog?blog_category=${title}&favorite=${favo}`
            : `${
                import.meta.env.VITE_BASE_URL_API
              }/blogcontroller/sitegetallblogtranslation?language_code=${
                i18n.language
              }&blog_category_uz=${title}${favo ? "&favorite=true" : ""}`
        );
        const result = await response.json();
        setData(result?.list);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language, title, favo]);

  return { data, loading, error };
};
