import axios from "axios";
import React, { useEffect, useState } from "react";
import { Icon, Wrap } from "./style";

const Favorites = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("/api/blogcontroller/sitegetallblog");
    res.status === 200 && setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((e) => (
        <Wrap key={e.id}>
          <Wrap.Img>
            <img loading="lazy" src={e?.img} alt="" />
          </Wrap.Img>
          <Wrap.Content>
            <Wrap.Date>
              <span className="left">{e?.left}</span>
              <span className="date">{e?.date}</span>
            </Wrap.Date>
            <Wrap.Title>
              {e?.title} <Icon />
              <div className="bottom"></div>
            </Wrap.Title>
          </Wrap.Content>
        </Wrap>
      ))}
    </div>
  );
};

export default Favorites;
