import React, { useEffect } from "react";
import { Content } from "../Centers/style";

import center from "../../assets/images/center.jpg";
import { NavLink } from "react-router-dom";

const Departments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      id: 0,
      title: "Xalqaro bolim",
      p: "Moment in the life of any aspiring astronomer of that it is time.",
      path: "/international",
    },
    {
      id: 1,
      title: "Department",
      p: "Moment in the life of any aspiring astronomer of that it is time.",
      path: "/department",
    },
    {
      id: 2,
      title: "O‘quv-uslubiy boshqarma",
      p: "none",
      path: "/educational-department",
    },
  ];

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content>
          {data.map(({ id, title, p, path }) => (
            <NavLink to={path} key={id} style={{ textDecoration: "none" }}>
              <Content.Item>
                <Content.Img loading="lazy" src={center} />
                <Content.Title>{title}</Content.Title>
                <Content.P>{p}</Content.P>
              </Content.Item>
            </NavLink>
          ))}
        </Content>
      </div>
    </div>
  );
};

export default Departments;
