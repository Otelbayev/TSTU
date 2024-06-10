import { createContext, useContext, useEffect, useState } from "react";
import useAxios from "./../../hooks/useAxios";

const LanguageContex = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContex);
};

const LanguageContexProvider = ({ children }) => {
  const { sendRequest } = useAxios();
  const [language, setLanguage] = useState(
    location.pathname.split("/")[1] || "uz"
  );

  const [options, setOptions] = useState([]);

  const [createLang, setCreateLang] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await sendRequest({
        method: "get",
        url: "/api/language/sitegetalllanguage",
      });
      setOptions([
        { id: 0, code: "uz", title: "O'zbek", title_short: "O'zb" },
        ...response?.data,
      ]);
    }

    getData();
  }, [createLang]);

  const code = options.map((e) => e?.code);

  return (
    <LanguageContex.Provider
      value={{ language, setLanguage, code, options, setCreateLang }}
    >
      {children}
    </LanguageContex.Provider>
  );
};

export default LanguageContexProvider;
