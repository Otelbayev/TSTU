import { createContext, useContext, useState } from "react";

const BreadcrumbContext = createContext();

export const useBreadcrumbContext = () => useContext(BreadcrumbContext);

const BreadcrumbProvider = ({ children }) => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  return (
    <BreadcrumbContext.Provider
      value={{
        breadcrumb,
        setBreadcrumb,
      }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbProvider;
