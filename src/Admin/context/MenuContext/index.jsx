import { createContext, useContext, useState } from "react";
import useAxios from "../../../hooks/useAxios";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

const MenuProvider = ({ children }) => {
  const { sendRequest } = useAxios();
  const [menuOptions, setMenuOptions] = useState([]);
  const [topMenuOptions, setTopMenuOptions] = useState([]);
  const [parentMenuOptions, setParentMenuOptions] = useState([]);

  async function getMenuType(value) {
    const res = await sendRequest({
      method: "get",
      url:
        value === "uz"
          ? "/api/menutype/sitegetallmenutype"
          : `/api/menutype/sitegetallmenutypetranslation?language_code=${value}`,
    });

    res.status === 200 &&
      setMenuOptions(
        res?.data
          ?.sort((a, b) => a.id - b.id)
          .map((e) => ({
            value: e.id,
            label: e.title,
            parent: e?.menu_type_id,
          }))
      );
  }

  async function getTopMenu(value) {
    const res = await sendRequest({
      method: "get",
      url:
        value === "uz"
          ? `/api/menu/sitegetallmenu?top_menu=true`
          : `/api/menu/sitegetallmenutranslation?language_code=${value}&top_menu=true`,
    });

    res.status === 200 &&
      setTopMenuOptions([
        ...res.data
          .sort((a, b) => a.id - b.id)
          .map((e) => ({
            value: e.id,
            label: e.title,
            parent: e?.menu_id,
          })),
      ]);
  }

  async function getParentMenu(value) {
    const res = await sendRequest({
      method: "get",
      url:
        value === "uz"
          ? "/api/menu/sitegetallmenu"
          : `/api/menu/sitegetallmenutranslation?language_code=${value}`,
    });
    res.status === 200 &&
      setParentMenuOptions(
        res.data
          .filter((e) => e?.top_menu || e?.high_menu)
          .map((e) => ({
            value: e.id,
            label: e.title,
            parent: e?.menu_id,
          }))
      );
  }

  return (
    <MenuContext.Provider
      value={{
        menuOptions,
        getMenuType,
        topMenuOptions,
        getTopMenu,
        getParentMenu,
        parentMenuOptions,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
