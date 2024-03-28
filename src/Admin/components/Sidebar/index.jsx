import React from "react";
import { Link } from "./style";
import Cookies from "js-cookie";

const Sidebar = () => {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4 vh-100">
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="https://tstu.uz/storage/app/public/images/2023-11-02/lkYrosoK1KkBQCu3syj1kgkyJYMLAcuH6bKRWre1.jpeg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info" style={{ whiteSpace: "initial" }}>
              <Link to="profile" className="d-block">
                Модератор сайта (Admin)
              </Link>
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
                <Link to="home" className="nav-link">
                  <i className="nav-icon fas fa-university" />
                  <p>Главная</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="menu" className="nav-link">
                  <i className="nav-icon fas fa-bars" />
                  <p>Меню</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="pages" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Страницы</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="faculties" className="nav-link">
                  <i className="nav-icon fas fa-list"></i>
                  <p>Факултутеты</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="kafedra" className="nav-link">
                  <i className="nav-icon fas fa-list"></i>
                  <p>Кафедры</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="department" className="nav-link">
                  <i className="nav-icon fas fa-list" />
                  <p>Отделы</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="directions" className="nav-link">
                  <i className="nav-icon fas fa-list"></i>
                  <p>Направление</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="teachers" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Преподаватели</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="graduate" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Выпускники</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="employee" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>Сотрудники</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-globe" />
                  <p>На Сайт</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="profile" className="nav-link">
                  <i className="nav-icon fas fa-user" />
                  <p>Профиль</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  onClick={() => Cookies.remove("_token")}
                >
                  <i className="nav-icon fas fa-power-off" />
                  <p>Выйти</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
