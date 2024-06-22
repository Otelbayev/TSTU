import React, { lazy } from "react";
import { useId } from "../hooks/useId";

const Blog = lazy(() => import("../pages/Blog"));
const BlogId = lazy(() => import("../pages/BlogID"));

const Department = lazy(() => import("../pages/Department"));
const DepartmentID = lazy(() => import("../pages/DepartmentID"));

const PageID = lazy(() => import("../pages/PageID"));

const EmployeeID = lazy(() => import("../pages/EmployeeID"));

const FacultiesID = lazy(() => import("../pages/FacultiesID"));
const KafedraID = lazy(() => import("../pages/KafedraID"));

const Contact = lazy(() => import("../pages/Contact"));
const Faq = lazy(() => import("../pages/Faq"));
const Appeals = lazy(() => import("../pages/Rector"));
const History = lazy(() => import("../pages/History"));
const Rectorat = lazy(() => import("../pages/Rectorat"));

const InteractiveServices = lazy(() => import("../pages/Interactive"));
const Centers = lazy(() => import("../pages/Centers"));
const Honorary = lazy(() => import("../pages/Honorary"));
const Faculties = lazy(() => import("../pages/Faculties"));
const ScientificCenter = lazy(() => import("../pages/ScientificCenter"));
const SignUp = lazy(() => import("../pages/SignUp"));
const SignIn = lazy(() => import("../pages/SignIn"));
const HomePage = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/404"));
const Galereya = lazy(() => import("../pages/Galereya"));
const Arm = lazy(() => import("../pages/Arm"));
const StudentLife = lazy(() => import("../pages/StudentLife"));
const Structure = lazy(() => import("../pages/Structure"));

export const navbar = [
  {
    id: useId(),
    path: "history",
    element: <History />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "structure",
    element: <Structure />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "scientific-center",
    element: <ScientificCenter />,
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
    path: "honorary",
    element: <Honorary />,
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
    path: "department",
    element: <Department />,
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
    path: "student-life",
    element: <StudentLife />,
  },
  {
    id: useId(),
    path: "department/:id",
    element: <DepartmentID />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "page/:id",
    element: <PageID />,
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
    path: "facultet/:id",
    element: <FacultiesID />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "kafedra/:id",
    element: <KafedraID />,
    isPrivate: false,
  },
  {
    id: useId(),
    path: "employee/:id",
    element: <EmployeeID />,
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
    path: "appeals",
    element: <Appeals />,
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
