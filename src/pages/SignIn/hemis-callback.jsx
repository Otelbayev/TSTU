import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";

const HemisCallback = () => {
  const history = useHistory();
  const { i18n } = useTranslation();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      axios
        .post(`${import.meta.env.VITE_BASE_URL_API}/user/hemis/gettoken`, {
          code,
        })
        .then((response) => {
          const token = response.data.access_token;
          localStorage.setItem("_token", token);
          history.push(`/${i18n.language}/admin/home`);
        })
        .catch((error) => console.error("Token olishda xatolik:", error));
    }
  }, [history]);

  return <div>Hemis orqali login amalga oshirilmoqda...</div>;
};

export default HemisCallback;
