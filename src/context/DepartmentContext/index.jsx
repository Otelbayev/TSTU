import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLanguageContext } from "../LanguageContext";

const FrontDepartmentContxt = createContext();

export const useFrontDepartmentContext = () =>
  useContext(FrontDepartmentContxt);

const FrontDepartmentContxtProvider = ({ children }) => {
  const { language } = useLanguageContext();

  const [fakultet, setFakultet] = useState([]);
  const [kafedra, setKafedra] = useState([]);
  const getAllDepartment = async () => {
    const res = await axios.get(
      language === "uz"
        ? "/api/departament/sitegetalldepartament"
        : "/api/departament/sitegetalldepartamenttranslation"
    );
    if (res.status === 200) {
      setFakultet(
        res?.data?.filter(
          (e) => e?.departament_type_?.type?.toLowerCase() === "fakultet"
        ) || []
      );
      setKafedra(
        res?.data?.filter(
          (e) => (e) => e?.departament_type_?.type?.toLowerCase() === "kafedra"
        )
      );
    }
  };

  useEffect(() => {
    getAllDepartment();
  }, [language]);

  return (
    <FrontDepartmentContxt.Provider value={{ fakultet, kafedra }}>
      {children}
    </FrontDepartmentContxt.Provider>
  );
};

export default FrontDepartmentContxtProvider;
