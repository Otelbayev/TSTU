import React, { lazy } from "react";
import { useId } from "../hooks/useId";

const Centers = lazy(() => import("../pages/Centers"));
const Contact = lazy(() => import("../pages/Contact"));
const Faculties = lazy(() => import("../pages/Faculties"));
const Faq = lazy(() => import("../pages/Faq"));
const Honorary = lazy(() => import("../pages/Honorary"));
const Blog = lazy(() => import("../pages/News"));
const OurHistory = lazy(() => import("../pages/OurHistory"));
const Rector = lazy(() => import("../pages/Rector"));
const Scientific = lazy(() => import("../pages/Scientific"));
const Sport = lazy(() => import("../pages/Sport"));
const Admisson = lazy(() => import("../pages/Admisson"));
const ScientificId = lazy(() => import("../pages/Scientific/ScientificId"));
const HonoraryId = lazy(() => import("../pages/Honorary/HonoraryId"));
const CentersId = lazy(() => import("../pages/Centers/CenterId"));
const Rectorat = lazy(() => import("../pages/Rectorat"));
const Departments = lazy(() => import("../pages/Departments"));
const InteractiveServices = lazy(() => import("../pages/Interactive"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const FacultiesId = lazy(() => import("../pages/Faculties/FacultiesId"));
const HomePage = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/404"));
const Galereya = lazy(() => import("../pages/Galereya"));
const Arm = lazy(() => import("../pages/Arm"));
const Kafedra = lazy(() => import("../pages/Faculties/Kafedra"));
const Department = lazy(() => import("../pages/Department"));
const BlogId = lazy(() => import("../pages/News/NewsId"));
const Announcement = lazy(() => import("../pages/Announcement"));
const AnnouncementId = lazy(() =>
  import("../pages/Announcement/AnnouncementId")
);
const Employee = lazy(() => import("../pages/Employee"));
const StudentLife = lazy(() => import("../pages/StudentLife"));
const Structure = lazy(() => import("../pages/Structure"));
const Page = lazy(() => import("../pages/Page"));

export const navbar = [
  {
    id: useId(),
    path: "structure",
    element: <Structure />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "scientific-center",
    element: <Scientific />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "scientific-center/:id",
    element: <ScientificId />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "history",
    element: <OurHistory />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "sport",
    element: <Sport />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "admisson",
    element: <Admisson />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "centers",
    element: <Centers />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "centers/:id",
    element: <CentersId />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "honorary",
    element: <Honorary />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "honorary/:id",
    element: <HonoraryId />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "rectorat",
    element: <Rectorat />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "departments",
    element: <Departments />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "interactive-services",
    element: <InteractiveServices />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "international",
    element: <Department />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "department",
    element: <Department />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "educational-department",
    element: <Department />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "student-life",
    element: <StudentLife />,
  },
  {
    id: useId(),
    path: "page/:id",
    element: <Page />,
  },
];

export const routes = [
  {
    id: useId(),
    path: "/",
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
    path: "employee",
    element: <Employee />,
    isPrivate: false,
  },
];

export const noshowcase = [
  {
    id: useId(),
    path: "faq",
    element: <Faq />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "contact",
    element: <Contact />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "rector",
    element: <Rector />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "blog",
    element: <Blog />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "blog/:id",
    element: <BlogId />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "faculties",
    element: <Faculties />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "announcement",
    element: <Announcement />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "announcement/:id",
    element: <AnnouncementId />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "signin",
    element: <SignIn />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "signup",
    element: <SignUp />,
    isPrivate: false,
  },
];
