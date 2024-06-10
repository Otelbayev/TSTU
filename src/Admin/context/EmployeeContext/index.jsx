import axios from "axios";
import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const EmployeeContext = createContext();

export const useEmployeeContext = () => useContext(EmployeeContext);

const EmployeeContextProvider = ({ children }) => {
  const [employeeTypeData, setEmployeeTypeData] = useState([]);

  const getEmployeeType = async (value) => {
    const res = await axios.get(
      value === "uz"
        ? "/api/employeetype/getallemployeetype"
        : `/api/employeetype/getallemployeetypetranslation?language_code=${value}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      }
    );
    res?.status === 200 &&
      setEmployeeTypeData(
        res.data?.map((e) => ({ value: e.id, label: e.title }))
      );
  };

  return (
    <EmployeeContext.Provider value={{ getEmployeeType, employeeTypeData }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
