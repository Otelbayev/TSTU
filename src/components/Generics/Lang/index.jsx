import { Select } from "antd";
import { useState } from "react";
import { Container } from "./style";

const options = [
  { id: 1, value: "uz", label: "O'zb" },
  { id: 2, value: "eng", label: "Eng" },
  { id: 3, value: "ru", label: "Rus" },
];

const Lang = ({ mode }) => {
  const [lang, setLang] = useState("uz");
  const handleChage = (value) => {
    setLang(value);
  };
  return (
    <Container $mode={mode}>
      <Select value={lang} onChange={handleChage} style={{ width: "80px" }}>
        {options.map(({ id, value, label }) => (
          <Select.Option hidden={lang === value} key={id} value={value}>
            {label}
          </Select.Option>
        ))}
      </Select>
    </Container>
  );
};

export default Lang;
