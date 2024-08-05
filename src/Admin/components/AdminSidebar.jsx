import { useEffect } from "react";
import { useDepartmentContext } from "../context/DepartmentContext";
import { blog, employee, menu, user, crud } from "../utils/mock";

export const admin = () => {
  const {
    sidebarDepartment,
    getSidebarDepartment,
    isCreateDepartmentType,
    isDeleteDepartmentType,
  } = useDepartmentContext();

  useEffect(() => {
    getSidebarDepartment();
  }, [isCreateDepartmentType, isDeleteDepartmentType]);

  return [
    // admin
    {
      id: 1,
      path: "pages",
      title: "Sahifalar",
      roles: ["admin"],
      icon: "nav-icon fa fa-file",
    },
    {
      id: 2,
      title: "Menu",
      roles: ["admin"],
      data: menu,
      icon: "nav-icon fas fa-bars",
    },
    {
      id: 3,
      title: "Blog",
      roles: ["admin"],
      icon: "nav-icon fas fa-blog",
      data: blog,
    },
    {
      id: 4,
      title: "Employee",
      roles: ["admin"],
      data: employee,
      icon: "nav-icon fas fa-users",
    },
    {
      id: 5,
      title: "Depaerment",
      roles: ["admin"],
      icon: "nav-icon fas fa-building",
      data: sidebarDepartment,
    },
    {
      id: 6,
      title: "User",
      roles: ["admin"],
      data: user,
      icon: "nav-icon fas fa-users-gear",
    },
    {
      id: 7,
      title: "CRUD",
      roles: ["admin"],
      data: crud,
      icon: "nav-icon fas fa-edit",
    },
    // teacher
    {
      id: 8,
      path: "import-doc",
      title: "110 ball",
      roles: ["teacher"],
      icon: "nav-icon fa fa-file-import",
    },
    {
      id: 9,
      path: "confirm-teacher-110",
      title: "O'qituvchi 110 tasdiqlash",
      roles: ["headdepartment"],
      icon: "nav-icon fa fa-check",
    },
    {
      id: 10,
      path: "study-department",
      title: "O'qituvchilarni baholash",
      roles: ["studydepartment"],
      icon: "nav-icon fa-solid fa-ranking-star",
    },
  ];
};
