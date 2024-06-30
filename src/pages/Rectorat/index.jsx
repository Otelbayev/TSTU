import React, { useEffect, useState } from "react";
import RectorCart from "../../components/RectorCart";
import { Content } from "./style";
import rector from "../../assets/images/rector.png";
import { useLanguageContext } from "../../context/LanguageContext";

const Rectorat = () => {
  const { language } = useLanguageContext();
  const [rector, setRector] = useState({});
  const [pro, setPro] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const arr = [
    {
      id: 0,
      img: rector,
      name: "Abduraxmanov Odil Kalandarovich",
      position: "Rector",
      desc: "Rektor, Iqtisodiyot fanlari doktori, Professor",
      phone: ["(101) 222 123 456", "(101) 222 123 456"],
      email: ["company@saas.com", "support@saas-stakk.com"],
    },
    {
      id: 1,
      img: rector,
      name: "Abduraxmanov Odil Kalandarovich",
      position: "Rector",
      desc: "Rektor, Iqtisodiyot fanlari doktori, Professor",
      phone: ["(101) 222 123 456", "(101) 222 123 456"],
      email: ["company@saas.com", "support@saas-stakk.com"],
    },
    {
      id: 2,
      img: rector,
      name: "Abduraxmanov Odil Kalandarovich",
      position: "Rector",
      desc: "Rektor, Iqtisodiyot fanlari doktori, Professor",
      phone: ["(101) 222 123 456", "(101) 222 123 456"],
      email: ["company@saas.com", "support@saas-stakk.com"],
    },
    {
      id: 3,
      img: rector,
      name: "Abduraxmanov Odil Kalandarovich",
      position: "Rector",
      desc: "Rektor, Iqtisodiyot fanlari doktori, Professor",
      phone: ["(101) 222 123 456", "(101) 222 123 456"],
      email: ["company@saas.com", "support@saas-stakk.com"],
    },
    {
      id: 4,
      img: rector,
      name: "Abduraxmanov Odil Kalandarovich",
      position: "Rector",
      desc: "Rektor, Iqtisodiyot fanlari doktori, Professor",
      phone: ["(101) 222 123 456", "(101) 222 123 456"],
      email: ["company@saas.com", "support@saas-stakk.com"],
    },
    {
      id: 5,
      img: rector,
      name: "Abduraxmanov Odil Kalandarovich",
      position: "Rector",
      desc: "Rektor, Iqtisodiyot fanlari doktori, Professor",
      phone: ["(101) 222 123 456", "(101) 222 123 456"],
      email: ["company@saas.com", "support@saas-stakk.com"],
    },
  ];

  useEffect(() => {
    fetch(
      language === "uz"
        ? "/api/persondata/sitegetallpersondatadepid/1"
        : `/api/persondata/sitegetallpersondatatranslationdepuzid/1?language_code=${language}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRector(
          res.find(
            (e) =>
              e?.persons_?.employee_type_?.title === "Rektor" ||
              e?.persons_translation_?.persons_?.employee_type_?.title ===
                "Rektor"
          )
        );
      });
  }, [language]);

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <RectorCart data={rector} />
        </Content>
      </div>
    </div>
  );
};

export default Rectorat;
