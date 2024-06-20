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

  const fetchUzDepartment = async (title) => {
    const res = await axios.get(
      `/api/departament/getalldepartamenttypesite/${title}`
    );
    if (res.status === 200) {
      return res.data;
    } else {
      return [];
    }
  };

  const fetchTranslationDepartment = async (titleuz) => {
    const departmentTypeResponse = await axios.get(
      `/api/deartamenttypecontroller/sitegetbytitledepartamenttype/${titleuz}`
    );
    if (departmentTypeResponse.status === 200) {
      const translationResponse = await axios.get(
        `/api/deartamenttypecontroller/sitegetbyuziddepartamenttypetranslation/${departmentTypeResponse.data?.id}?language_code=${language}`
      );
      if (translationResponse.status === 200) {
        const departmentResponse = await axios.get(
          `/api/departament/getalldepartamenttranslationtypesite/${translationResponse.data?.title}?language_code=${language}`
        );
        if (departmentResponse.status === 200) {
          return departmentResponse.data;
        }
      }
    }
  };

  const getDepartment = useCallback(
    async (titleuz) => {
      if (language === "uz") {
        return await fetchUzDepartment(titleuz);
      } else {
        return await fetchTranslationDepartment(titleuz);
      }
    },
    [language]
  );

  useEffect(() => {
    const fetchAllDepartment = async () => {
      const [first, second] = await Promise.all([
        getDepartment("Fakultet"),
        getDepartment("kafedra"),
      ]);

      setFaculties(first);
      setKafedras(second);
    };

    fetchAllDepartment();
  }, [getDepartment]);

  return (
    <FrontDepartmentContxt.Provider value={{ faculties, kafedras }}>
      {children}
    </FrontDepartmentContxt.Provider>
  );
};

export default FrontDepartmentContxtProvider;
