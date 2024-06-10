import React, { useEffect } from "react";
import RectorCart from "../../components/RectorCart";
import { Content } from "./style";
import rector from "../../assets/images/rector.png";

const Rectorat = () => {
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
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          {arr.map((item) => (
            <RectorCart data={item} key={item.id} />
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Rectorat;
