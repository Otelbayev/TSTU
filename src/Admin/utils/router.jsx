import { Navigate } from "react-router-dom";
import { useId } from "../../hooks/useId";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { Menu, EditMenu, CreateMenu } from "../pages/Menu";
import { Page, CreatePage, EditPage } from "../pages/Page";
import Faculties from "../pages/Faculties";
import Kafedra from "../pages/Kafedra";
import Directions from "../pages/Directions";
import Teachers from "../pages/Teachers";
import Graduate from "../pages/Graduate";
import {
  Department,
  DepartmentCreate,
  DepartmentEdit,
} from "../pages/Department";
import { CreateEmployee, EditEmployee, Employee } from "../pages/Employee";

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
    path: "/department",
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
    path: "/faculties",
    element: <Faculties />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/faculties/create",
    element: <DepartmentCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/faculties/edit/:id",
    element: <DepartmentEdit />,
    isPrivte: true,
  },

  {
    id: useId(),
    path: "/kafedra",
    element: <Kafedra />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/kafedra/create",
    element: <DepartmentCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/kafedra/edit/:id",
    element: <DepartmentEdit />,
    isPrivte: true,
  },

  {
    id: useId(),
    path: "/directions",
    element: <Directions />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/directions/create",
    element: <DepartmentCreate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/directions/edit/:id",
    element: <DepartmentEdit />,
    isPrivte: true,
  },

  {
    id: useId(),
    path: "/teachers",
    element: <Teachers />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/teachers/create",
    element: <CreateEmployee />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/teachers/edit/:id",
    element: <EditEmployee />,
    isPrivte: true,
  },

  {
    id: useId(),
    path: "/graduate",
    element: <Graduate />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/graduate/create",
    element: <CreateEmployee />,
    isPrivte: true,
  },
  {
    id: useId(),
    path: "/graduate/edit/:id",
    element: <EditEmployee />,
    isPrivte: true,
  },

  {
    id: useId(),
    path: "/employee",
    element: <Employee />,
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
    path: "/profile",
    element: <Profile />,
    isPrivte: true,
  },
];
