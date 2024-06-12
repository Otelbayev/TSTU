import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import { useId } from "../../hooks/useId";

// Lazy load all components
const Home = lazy(() => import("../pages/Home"));
const Profile = lazy(() => import("../pages/Profile"));
const Appeals = lazy(() => import("../pages/Appeals"));

const Menu = lazy(() => import("../pages/Menu/Main"));
const CreateMenu = lazy(() => import("../pages/Menu/Create"));
const EditMenu = lazy(() => import("../pages/Menu/Edit"));

const Page = lazy(() => import("../pages/Page/Main"));
const CreatePage = lazy(() => import("../pages/Page/Create"));
const EditPage = lazy(() => import("../pages/Page/Edit"));

const Person = lazy(() => import("../pages/Employee/Main"));
const CreateEmployee = lazy(() => import("../pages/Employee/Create"));
const EditEmployee = lazy(() => import("../pages/Employee/Edit"));

const Blog = lazy(() => import("../pages/Blog/Main"));
const CreateBlog = lazy(() => import("../pages/Blog/Create"));
const EditBlog = lazy(() => import("../pages/Blog/Edit"));

const Status = lazy(() => import("../pages/Crud/Status/Main"));
const StatusCreate = lazy(() => import("../pages/Crud/Status/Create"));
const StatusEdit = lazy(() => import("../pages/Crud/Status/Edit"));

const Site = lazy(() => import("../pages/Site/Main"));
const SiteCreate = lazy(() => import("../pages/Site/Create"));
const SiteEdit = lazy(() => import("../pages/Site/Edit"));

const SiteType = lazy(() => import("../pages/Crud/SIteType/Main"));
const SiteTypeCreate = lazy(() => import("../pages/Crud/SIteType/Create"));
const SiteTypeEdit = lazy(() => import("../pages/Crud/SIteType/Edit"));

const SiteDetails = lazy(() => import("../pages/Crud/SiteDetails/Main"));
const SiteDetailsCreate = lazy(() =>
  import("../pages/Crud/SiteDetails/Create")
);
const SiteDetailsEdit = lazy(() => import("../pages/Crud/SiteDetails/Edit"));

const UserType = lazy(() => import("../pages/Crud/UserType/Main"));
const UserTypeCreate = lazy(() => import("../pages/Crud/UserType/Create"));
const UserTypeEdit = lazy(() => import("../pages/Crud/UserType/Edit"));

const MenuType = lazy(() => import("../pages/Crud/MenuType/Main"));
const MenuTypeCreate = lazy(() => import("../pages/Crud/MenuType/Create"));
const MenuTypeEdit = lazy(() => import("../pages/Crud/MenuType/Edit"));

const Language = lazy(() => import("../pages/Crud/Language/Main"));
const LanguageCreate = lazy(() => import("../pages/Crud/Language/Create"));
const LanguageEdit = lazy(() => import("../pages/Crud/Language/Edit"));

const City = lazy(() => import("../pages/Crud/City/Main"));
const CityCreate = lazy(() => import("../pages/Crud/City/Create"));
const CityEdit = lazy(() => import("../pages/Crud/City/Edit"));

const Country = lazy(() => import("../pages/Crud/Country/Main"));
const CountryCreate = lazy(() => import("../pages/Crud/Country/Create"));
const CountryEdit = lazy(() => import("../pages/Crud/Country/Edit"));

const Region = lazy(() => import("../pages/Crud/Region/Main"));
const RegionCreate = lazy(() => import("../pages/Crud/Region/Create"));
const RegionEdit = lazy(() => import("../pages/Crud/Region/Edit"));

const Token = lazy(() => import("../pages/Crud/Token/Main"));
const TokenCreate = lazy(() => import("../pages/Crud/Token/Create"));
const TokenEdit = lazy(() => import("../pages/Crud/Token/Edit"));

const Gender = lazy(() => import("../pages/Crud/Gender/Main"));
const GenderCreate = lazy(() => import("../pages/Crud/Gender/Create"));
const GenderEdit = lazy(() => import("../pages/Crud/Gender/Edit"));

const Employment = lazy(() => import("../pages/Crud/Employment/Main"));
const EmploymentCreate = lazy(() => import("../pages/Crud/Employment/Create"));
const EmploymentEdit = lazy(() => import("../pages/Crud/Employment/Edit"));

const EmployeeType = lazy(() => import("../pages/Crud/EmployeeType/Main"));
const EmployeeTypeCreate = lazy(() =>
  import("../pages/Crud/EmployeeType/Create")
);
const EmployeeTypeEdit = lazy(() => import("../pages/Crud/EmployeeType/Edit"));

const Neighborhood = lazy(() => import("../pages/Crud/Neighborhood/Main"));
const NeighborhoodCreate = lazy(() =>
  import("../pages/Crud/Neighborhood/Create")
);
const NeighborhoodEdit = lazy(() => import("../pages/Crud/Neighborhood/Edit"));

const Department = lazy(() => import("../pages/Department/Main"));
const DepartmentCreate = lazy(() => import("../pages/Department/Create"));
const DepartmentEdit = lazy(() => import("../pages/Department/Edit"));

const DepartmentType = lazy(() => import("../pages/Crud/DepartmentType/Main"));
const DepartmentTypeCreate = lazy(() =>
  import("../pages/Crud/DepartmentType/Create")
);
const DepartmentTypeEdit = lazy(() =>
  import("../pages/Crud/DepartmentType/Edit")
);

const DepartmentDetails = lazy(() =>
  import("../pages/Crud/DepartmentDetails/Main")
);
const DepartmentDetailsCreate = lazy(() =>
  import("../pages/Crud/DepartmentDetails/Create")
);
const DepartmentDetailsEdit = lazy(() =>
  import("../pages/Crud/DepartmentDetails/Edit")
);

const BlogCategory = lazy(() => import("../pages/Crud/BlogCategory/Main"));
const BlogCategoryCreate = lazy(() =>
  import("../pages/Crud/BlogCategory/Create")
);
const BlogCategoryEdit = lazy(() => import("../pages/Crud/BlogCategory/Edit"));

const Users = lazy(() => import("../pages/User/Main"));
const UserCreate = lazy(() => import("../pages/User/Create"));
const UserEdit = lazy(() => import("../pages/User/Edit"));

const File = lazy(() => import("../pages/Crud/File/Main"));
const FileCreate = lazy(() => import("../pages/Crud/File/Create"));
const FileEdit = lazy(() => import("../pages/Crud/File/Edit"));

const Interactive = lazy(() => import("../pages/Interactive/Main"));
const InteractiveCreate = lazy(() => import("../pages/Interactive/Create"));
const InteractiveEdit = lazy(() => import("../pages/Interactive/Edit"));

export const routes = [
  {
    id: useId(),
    path: "/",
    element: <Navigate to="home" />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/home",
    element: <Home />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/department/:type",
    element: <Department />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/department/create",
    element: <DepartmentCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/department/edit/:id",
    element: <DepartmentEdit />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/menu",
    element: <Menu />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/menu/create",
    element: <CreateMenu />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/menu/edit/:id",
    element: <EditMenu />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/pages",
    element: <Page />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/pages/create",
    element: <CreatePage />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/pages/edit/:id",
    element: <EditPage />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/employee",
    element: <Person />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/employee/create",
    element: <CreateEmployee />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/employee/edit/:id",
    element: <EditEmployee />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/blogs",
    element: <Blog />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/blogs/create",
    element: <CreateBlog />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/blogs/edit/:id",
    element: <EditBlog />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/profile",
    element: <Profile />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/appeals",
    element: <Appeals />,
    isPrivte: true,
  },
  //DepartmentType
  {
    id: useId(),
    path: "/departmenttype",
    element: <DepartmentType />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/departmenttype/create",
    element: <DepartmentTypeCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/departmenttype/edit/:id",
    element: <DepartmentTypeEdit />,
    isPrivte: true,
  },
  //Site
  {
    id: useId(),
    path: "/site",
    element: <Site />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/site/create",
    element: <SiteCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/site/edit/:id",
    element: <SiteEdit />,
    isPrivte: true,
  },
  //SiteType
  {
    id: useId(),
    path: "/sitetype",
    element: <SiteType />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/sitetype/create",
    element: <SiteTypeCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/sitetype/edit/:id",
    element: <SiteTypeEdit />,
    isPrivte: true,
  },
  //UserType
  {
    id: useId(),
    path: "/usertype",
    element: <UserType />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/usertype/create",
    element: <UserTypeCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/usertype/edit/:id",
    element: <UserTypeEdit />,
    isPrivte: true,
  },
  //MenuType
  {
    id: useId(),
    path: "/menutype",
    element: <MenuType />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/menutype/create",
    element: <MenuTypeCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/menutype/edit/:id",
    element: <MenuTypeEdit />,
    isPrivte: true,
  },
  //BlogCategory
  {
    id: useId(),
    path: "/blogcategory",
    element: <BlogCategory />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/blogcategory/create",
    element: <BlogCategoryCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/blogcategory/edit/:id",
    element: <BlogCategoryEdit />,
    isPrivte: true,
  },
  //Status
  {
    id: useId(),
    path: "/status",
    element: <Status />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/status/create",
    element: <StatusCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/status/edit/:id",
    element: <StatusEdit />,
    isPrivte: true,
  },
  //Language
  {
    id: useId(),
    path: "/language",
    element: <Language />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/language/create",
    element: <LanguageCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/language/edit/:id",
    element: <LanguageEdit />,
    isPrivte: true,
  },
  //City
  {
    id: useId(),
    path: "/city",
    element: <City />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/city/create",
    element: <CityCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/city/edit/:id",
    element: <CityEdit />,
    isPrivte: true,
  },
  //Region
  {
    id: useId(),
    path: "/region",
    element: <Region />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/region/create",
    element: <RegionCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/region/edit/:id",
    element: <RegionEdit />,
    isPrivte: true,
  },
  //Country
  {
    id: useId(),
    path: "/country",
    element: <Country />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/country/create",
    element: <CountryCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/country/edit/:id",
    element: <CountryEdit />,
    isPrivte: true,
  },
  //Employment
  {
    id: useId(),
    path: "/employment",
    element: <Employment />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/employment/create",
    element: <EmploymentCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/employment/edit/:id",
    element: <EmploymentEdit />,
    isPrivte: true,
  },
  //Token
  {
    id: useId(),
    path: "/token",
    element: <Token />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/token/create",
    element: <TokenCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/token/edit/:id",
    element: <TokenEdit />,
    isPrivte: true,
  },
  //Gender
  {
    id: useId(),
    path: "/gender",
    element: <Gender />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/gender/create",
    element: <GenderCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/gender/edit/:id",
    element: <GenderEdit />,
    isPrivte: true,
  },
  //Neighborhood
  {
    id: useId(),
    path: "/neighborhood",
    element: <Neighborhood />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/neighborhood/create",
    element: <NeighborhoodCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/neighborhood/edit/:id",
    element: <NeighborhoodEdit />,
    isPrivte: true,
  },
  //DepartmentDetails
  {
    id: useId(),
    path: "/department-details",
    element: <DepartmentDetails />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/department-details/create",
    element: <DepartmentDetailsCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/department-details/edit/:id",
    element: <DepartmentDetailsEdit />,
    isPrivte: true,
  },
  //Site Details
  {
    id: useId(),
    path: "/site-details",
    element: <SiteDetails />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/site-details/create",
    element: <SiteDetailsCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/site-details/edit/:id",
    element: <SiteDetailsEdit />,
    isPrivte: true,
  },
  //Users
  {
    id: useId(),
    path: "/users",
    element: <Users />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/users/create",
    element: <UserCreate />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/users/edit/:id",
    element: <UserEdit />,
    isPrivate: true,
  },
  //EmployeeType
  {
    id: useId(),
    path: "/employeetype",
    element: <EmployeeType />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/employeetype/create",
    element: <EmployeeTypeCreate />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/employeetype/edit/:id",
    element: <EmployeeTypeEdit />,
    isPrivate: true,
  },
  //File
  {
    id: useId(),
    path: "/file",
    element: <File />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/file/create",
    element: <FileCreate />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/file/edit/:id",
    element: <FileEdit />,
    isPrivate: true,
  },
  //Interactive
  {
    id: useId(),
    path: "/interactive",
    element: <Interactive />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/interactive/create",
    element: <InteractiveCreate />,
    isPrivate: true,
  },
  {
    id: useId(),
    path: "/interactive/edit/:id",
    element: <InteractiveEdit />,
    isPrivate: true,
  },
];
