import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useDepartment = (title, favo) => {
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
              }/departament/getalldepartamenttypesite/${title}`
            : `${
                import.meta.env.VITE_BASE_URL_API
              }/departament/getalldepartamenttranslationtypesite/${title}?language_code=${
                i18n.language
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
  }, [i18n.language, title]);

  return { data, loading, error };
};
