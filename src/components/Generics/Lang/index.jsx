import { Select } from "antd";
import { Container } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguageContext } from "../../../context/LanguageContext";

const Lang = ({ mode }) => {
  const { setLanguage, language, code, options } = useLanguageContext();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (value) => {
    setLanguage(value);
    if (window.location.pathname === "/") {
      navigate(`/${value}`, { replace: true });
    } else {
      const regex = new RegExp(`^/(${code.join("|")})`);
      const newPath = location.pathname.replace(regex, `/${value}`);
      navigate(newPath, { replace: true });
    }
  };

  let datas = options.map((e) => {
    return {
      label: e.title_short,
      value: e.code,
    };
  });

  return (
    <Container $mode={mode}>
      <Select
        style={{ width: "75px" }}
        value={language}
        onChange={handleLanguageChange}
        options={datas}
        className="select"
      />
    </Container>
  );
};

export default Lang;
