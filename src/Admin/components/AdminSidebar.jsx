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
    //admin
    {
      path: "pages",
      title: "Sahifalar",
      roles: ["admin"],
      icon: "nav-icon fa fa-file",
    },
    {
      title: "Menu",
      roles: ["admin"],
      data: menu,
      icon: "nav-icon fas fa-bars",
    },
    {
      title: "Blog",
      roles: ["admin"],
      icon: "nav-icon fas fa-blog",
      data: blog,
    },
    {
      title: "Employee",
      roles: ["admin"],
      data: employee,
      icon: "nav-icon fas fa-users",
    },
    {
      title: "Depaerment",
      roles: ["admin"],
      icon: "nav-icon fas fa-building",
      data: sidebarDepartment,
    },
    {
      title: "User",
      roles: ["admin"],
      data: user,
      icon: "nav-icon fas fa-users-gear",
    },

    {
      title: "CRUD",
      roles: ["admin"],
      data: crud,
      icon: "nav-icon fas fa-edit",
    },
    //teacher
    {
      path: "import-doc",
      title: "Import Doc",
      roles: ["teacher"],
      icon: "nav-icon fa fa-file-import",
    },
  ];
};
