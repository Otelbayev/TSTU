import React from "react";
import Centers from "../pages/Centers";
import Contact from "../pages/Contact";
import Faculties from "../pages/Faculties";
import Faq from "../pages/Faq";
import Honorary from "../pages/Honorary";
import News from "../pages/News";
import OurHistory from "../pages/OurHistory";
import Rector from "../pages/Rector";
import Scientific from "../pages/Scientific";
import Sport from "../pages/Sport";
import Admisson from "../pages/Admisson";
import ScientificId from "../pages/Scientific/ScientificId";
import HonoraryId from "../pages/Honorary/HonoraryId";
import CentersId from "../pages/Centers/CenterId";
import Rectorat from "../pages/Rectorat";
import Departments from "../pages/Departments";
import InteractiveServices from "../pages/Interactive";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import FacultiesId from "../pages/Faculties/FacultiesId";
import HomePage from "../pages/Home";
import NotFound from "../pages/404";
import Galereya from "../pages/Galereya";
import Arm from "../pages/Arm";
import Kafedra from "../pages/Faculties/Kafedra";
import Xalqaro from "../pages/XalqaroBolim";
import Department from "../pages/Department";
import EducationalDepartment from "../pages/OquvUslubiy";
import { useId } from "../hooks/useId";
import NewsId from "../pages/News/NewsId";
import Announcement from "../pages/Announcement";
import AnnouncementId from "../pages/Announcement/AnnouncementId";
import Admin from "../Admin";

export const navbar = [
  {
    id: useId(),
    path: "faq",
    element: <Faq />,
    isPrivate: false,
    breadCrumbName: "Faq",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "contact",
    element: <Contact />,
    isPrivate: false,
    breadCrumbName: "Contact",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "rector",
    element: <Rector />,
    isPrivate: false,
    breadCrumbName: "Rector",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "scientific-center",
    element: <Scientific />,
    isPrivate: false,
    breadCrumbName: "Ilmiy markaz",
    title: "Ilmiy markazlar",
  },
  {
    id: useId(),
    path: "scientific-center/:id",
    element: <ScientificId />,
    isPrivate: false,
    breadCrumbName: "none",
    title: "Temir yo‘l transporti ilmiy tadqiqot markazi",
  },
  {
    id: useId(),
    path: "history",
    element: <OurHistory />,
    isPrivate: false,
    breadCrumbName: "Tarix",
    title: "Bizning tarix",
  },
  {
    id: useId(),
    path: "sport",
    element: <Sport />,
    isPrivate: false,
    breadCrumbName: "Sport",
    title: "Sport majmuasi",
  },
  {
    id: useId(),
    path: "admisson",
    element: <Admisson />,
    isPrivate: false,
    breadCrumbName: "Qabul",
    title: "Qabul komissiyasi",
  },
  {
    id: useId(),
    path: "centers",
    element: <Centers />,
    isPrivate: false,
    breadCrumbName: "Markazlar",
    title: "Markazlar",
  },
  {
    id: useId(),
    path: "centers/:id",
    element: <CentersId />,
    isPrivate: false,
    breadCrumbName: "none",
    title: "Markaz",
  },
  {
    id: useId(),
    path: "honorary",
    element: <Honorary />,
    isPrivate: false,
    breadCrumbName: "Faxriy",
    title: "Faxriy professor o‘qtuvchilar",
  },
  {
    id: useId(),
    path: "honorary/:id",
    element: <HonoraryId />,
    isPrivate: false,
    breadCrumbName: "none",
    title: "Faxriy professor o‘qtuvchi",
  },
  {
    id: useId(),
    path: "news",
    element: <News />,
    isPrivate: false,
    breadCrumbName: "Yngiliklar",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "news/:id",
    element: <NewsId />,
    isPrivate: false,
    breadCrumbName: "Yngiliklar",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "faculties",
    element: <Faculties />,
    isPrivate: false,
    breadCrumbName: "Fakultetlar",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "announcement",
    element: <Announcement />,
    isPrivate: false,
    breadCrumbName: "E’lonlar",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "announcement/:id",
    element: <AnnouncementId />,
    isPrivate: false,
    breadCrumbName: "E’lonlar",
    breadcrumb: "dark",
  },
  {
    id: useId(),
    path: "rectorat",
    element: <Rectorat />,
    isPrivate: false,
    breadCrumbName: "Rektorat",
    title: "REKTORAT",
  },
  {
    id: useId(),
    path: "departments",
    element: <Departments />,
    isPrivate: false,
    breadCrumbName: "Bo‘limlar",
    title: "Bo‘limlar va boshqarmalar",
  },
  {
    id: useId(),
    path: "interactive-services",
    element: <InteractiveServices />,
    isPrivate: false,
    breadCrumbName: "Interaktiv",
    title: "Interaktiv xizmatlari",
  },
  {
    id: useId(),
    path: "signin",
    element: <SignIn />,
    isPrivate: false,
    breadCrumbName: "Kirish",
    breadcrumb: "primary",
  },
  {
    id: useId(),
    path: "signup",
    element: <SignUp />,
    isPrivate: false,
    breadCrumbName: "Registratsiya",
    breadcrumb: "primary",
  },
  {
    id: useId(),
    path: "international",
    element: <Xalqaro />,
    isPrivate: false,
    breadCrumbName: "Xalqaro",
    breadcrumb: "light",
    title: "Xalqaro bo‘lim",
  },
  {
    id: useId(),
    path: "department",
    element: <Department />,
    isPrivate: false,
    breadCrumbName: "Bo‘limlar",
    breadcrumb: "light",
    title: "Department",
  },
  {
    id: useId(),
    path: "educational-department",
    element: <EducationalDepartment />,
    isPrivate: false,
    breadCrumbName: "Department",
    breadcrumb: "light",
    title: "Department",
  },
];

export const routes = [
  {
    id: useId(),
    path: `/`,
    element: <HomePage />,
    isPrivate: false,
  },
  { id: useId(), path: "*", element: <NotFound />, isPrivate: false },
  { id: useId(), path: "arm", element: <Arm />, isPrivate: false },
  { id: useId(), path: "galereya", element: <Galereya />, isPrivate: false },
  {
    id: useId(),
    path: "faculties/:id",
    element: <FacultiesId />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "faculties/:id/:id",
    element: <Kafedra />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "admin/*",
    element: <Admin />,
    isPrivate: true,
  },
];
