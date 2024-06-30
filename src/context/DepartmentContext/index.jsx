import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useLanguageContext } from "../LanguageContext";

const FrontDepartmentContxt = createContext();

export const useFrontDepartmentContext = () =>
  useContext(FrontDepartmentContxt);

const FrontDepartmentContxtProvider = ({ children }) => {
  const { language } = useLanguageContext();

  const [faculties, setFaculties] = useState([]);
  const [kafedras, setKafedras] = useState([]);
  const [markazlar, setMarkazlar] = useState([]);
  const [favoMarkaz, setFavoMarkaz] = useState([]);

  const getData = async (title) => {
    const res = await axios.get(
      language === "uz"
        ? `/api/departament/getalldepartamenttypesite/${title}`
        : `/api/departament/getalldepartamenttranslationtypesite/${title}?language_code=${language}`
    );
    if (res.status === 200) {
      return res.data;
    } else {
      return [];
    }
  };

  useEffect(() => {
    const fetchAllDepartment = async () => {
      const [first, second, thrid] = await Promise.all([
        getData("Fakultet"),
        getData("Kafedra"),
        getData("Ilmiy markaz"),
      ]);

      setFaculties(first);
      setKafedras(second);
      setMarkazlar(thrid);
      setFavoMarkaz(
        thrid
          ?.filter((e) => e.favorite)
          ?.sort((a, b) => a?.position - b?.position)
      );
    };

    fetchAllDepartment();
  }, [language]);

  return (
    <FrontDepartmentContxt.Provider
      value={{ faculties, kafedras, markazlar, favoMarkaz }}
    >
      {children}
    </FrontDepartmentContxt.Provider>
  );
};

export default FrontDepartmentContxtProvider;
