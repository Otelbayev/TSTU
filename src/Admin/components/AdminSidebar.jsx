import { useEffect } from "react";
import { useBlogContext } from "../context/BlogContext";
import { useDepartmentContext } from "../context/DepartmentContext";
import { employee, generics, location, menu, site, user } from "../utils/mock";

export const admin = () => {
  const {
    sidebarDepartment,
    getSidebarDepartment,
    isCreateDepartmentType,
    isDeleteDepartmentType,
  } = useDepartmentContext();

  const {
    getBlogCategorySelect,
    blogCategoryOptions,
    isCreateBlogCategory,
    isDeleteBlogCategory,
  } = useBlogContext();

  useEffect(() => {
    getSidebarDepartment();
  }, [isCreateDepartmentType, isDeleteDepartmentType]);

  useEffect(() => {
    getBlogCategorySelect("uz");
  }, [isCreateBlogCategory, isDeleteBlogCategory]);

  return [
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
      data: blogCategoryOptions,
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
      data: [...generics, ...site, ...location],
      icon: "nav-icon fas fa-edit",
    },
  ];
};
