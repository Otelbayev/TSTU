import React, { useEffect } from "react";

import { useLanguageContext } from "./../../../context/LanguageContext/index";
import {
  blog,
  department,
  employee,
  generics,
  location,
  menu,
  site,
  user,
} from "../../utils/mock";
import Accardion from "../Accardion";
import { NavLink } from "react-router-dom";
import { useDepartmentContext } from "./../../context/DepartmentContext/index";

const Sidebar = () => {
  const { language } = useLanguageContext();
  const {
    sidebarDepartment,
    getSidebarDepartment,
    isCreateDepartmentType,
    isDeleteDepartmentType,
  } = useDepartmentContext();
  useEffect(() => {
    getSidebarDepartment();
  }, [isCreateDepartmentType, isDeleteDepartmentType]);

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary vh-100">
        <div style={{ boxShadow: "inset 0 0 1px #fff" }} className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                loading="lazy"
                src="https://tstu.uz/storage/app/public/images/2023-11-02/lkYrosoK1KkBQCu3syj1kgkyJYMLAcuH6bKRWre1.jpeg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info" style={{ whiteSpace: "initial" }}>
              <NavLink to="profile" className="d-block">
                Super Admin
              </NavLink>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <NavLink to="home" className="nav-link">
                  <i className="nav-icon fas fa-university" />
                  <p>Asosiy</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="pages" className="nav-link">
                  <i className="nav-icon fa fa-file" />
                  <p>Sahifalar</p>
                </NavLink>
              </li>
              <Accardion title="Menu" icon="nav-icon fas fa-bars" data={menu} />
              <Accardion title="Blog" icon="nav-icon fas fa-blog" data={blog} />
              <Accardion
                title="Employee"
                icon="nav-icon fas fa-users"
                data={employee}
              />
              <Accardion
                title="Depaerment"
                icon="nav-icon fas fa-building"
                data={department}
              />
              <Accardion
                icon="nav-icon fas fa-list"
                title={"Bo'limlar"}
                data={sidebarDepartment}
              />
              <Accardion
                title="Site"
                icon="nav-icon fa-regular fa-file"
                data={site}
              />
              <Accardion
                title="User"
                icon="nav-icon fas fa-users-gear"
                data={user}
              />
              <Accardion
                title="Location"
                icon="nav-icon fas fa-location-arrow"
                data={location}
              />
              <Accardion
                icon="nav-icon fas fa-people-arrows"
                title={"Umumiy"}
                data={generics}
              />
              <li className="nav-item">
                <NavLink to="appeals" className="nav-link">
                  <i className="nav-icon fa fa-file-text" />
                  <p>Murojaatlar</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="profile" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>Профиль</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <a href={`/${language}`} className="nav-link">
                  <i className="nav-icon fas fa-globe" />
                  <p>На Сайт</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href={`/${language}`}
                  className="nav-link"
                  onClick={() => Cookies.remove("_token")}
                >
                  <i className="nav-icon fas fa-power-off" />
                  <p>Выйти</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
