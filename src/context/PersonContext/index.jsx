import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLanguageContext } from "../LanguageContext";

const FrontPersonContext = createContext();

export const useFrontPersonContext = () => useContext(FrontPersonContext);

const FrontPersonContextProvider = ({ children }) => {
  const { language } = useLanguageContext();
  const [faxriyProfessor, setFaxriyProfessor] = useState([]);
  const [faxriyBitiruvchi, setFaxriyBitiruvchi] = useState([]);

  const getData = async (type) => {
    const res = await axios.get(
      language === "uz"
        ? `/api/persondata/sitegetallpersondata${
            type
              ? `?employee_type=${type}`
              : `/api/persondata/sitegetallpersondatatranslation?language_code=${language}${
                  type ? `&employee_type=${type}` : ""
                }`
          }`
        : ``
    );
    if (res.status === 200) {
      return res.data;
    }
  };

  useEffect(() => {
    async function getBy() {
      const [f1, f2] = await Promise.all([
        getData("Faxriy professor"),
        getData("Faxriy bitiruvchi"),
      ]);

      setFaxriyProfessor(f1);
      setFaxriyBitiruvchi(f2);
    }
    getBy();
  }, [language]);

  return (
    <FrontPersonContext.Provider value={{ faxriyBitiruvchi, faxriyProfessor }}>
      {children}
    </FrontPersonContext.Provider>
  );
};

export default FrontPersonContextProvider;
