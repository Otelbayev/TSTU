import { createContext, useContext, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Cookies from "js-cookie";

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

const PageProvider = ({ children }) => {
  const { sendRequest } = useAxios();
  const token = `Bearer ${Cookies.get("_token")}`;
  const [pageOptions, setPageOptions] = useState([]);

  async function getAllPageSelect(value) {
    const res = await sendRequest({
      method: "get",
      url:
        value === "uz"
          ? "/api/page/getallpageselect"
          : `/api/page/getallpagetranslationselect/${value}`,
      headers: { Authorization: token },
    });

    if (res.status === 200) {
      setPageOptions([
        { value: "", label: "Page", parent: null },
        ...res.data
          .sort((a, b) => a.id - b.id)
          .map((e) => ({
            value: e.id,
            label: e.title,
            parent: e?.page_id,
          })),
      ]);
    }
  }

  return (
    <PageContext.Provider value={{ pageOptions, getAllPageSelect }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
