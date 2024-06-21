import React, { useEffect } from "react";
import { Content } from "./style";
import back from "../../assets/images/bggggg.png";
import FacultyCart from "../../components/Faculties/FacultyCart";
import { useNavigate } from "react-router-dom";
import { useFrontDepartmentContext } from "./../../context/DepartmentContext";

const Faculties = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { faculties } = useFrontDepartmentContext();

  const naviagte = useNavigate();

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <div className="title">Fakultetlar</div>
          <Content.Body>
            {faculties.map((item) => {
              return (
                <FacultyCart
                  key={item?.id}
                  item={item}
                  onClick={() => naviagte(`${item.id}`)}
                />
              );
            })}
          </Content.Body>
        </Content>
      </div>
    </div>
  );
};

export default Faculties;
