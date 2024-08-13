import { Select } from "antd";
import { Container } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Lang = ({ mode, width }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL_API}/language/sitegetalllanguage`)
      .then((res) => res.json())
      .then((res) =>
        setData([
          { id: 0, code: "uz", title: "O'zbek", title_short: "O'zb" },
          ...res,
        ])
      );
  }, []);

  const code = data.map((e) => e?.code);

  const url = window.location.href;
  const urlObject = new URL(url);

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
    if (window.location.pathname === "/") {
      navigate(`/${value}${urlObject?.search ? urlObject?.search : ""}`, {
        replace: true,
      });
    } else {
  

      const regex = new RegExp(`^/(${code.join("|")})`);
      const newPath =
        location.pathname.replace(regex, `/${value}`) +
        (urlObject?.search ? urlObject?.search : "");
      navigate(newPath, { replace: true });
    }
  };

  let datas = data.map((e) => {
    return {
      label: e.title_short,
      value: e.code,
    };
  });

  return (
    <Container $mode={mode}>
      <Select
        style={{ width: width ? width : "75px" }}
        value={i18n.language}
        onChange={changeLanguage}
        options={datas}
        className="select"
      />
    </Container>
  );
};

export default Lang;
