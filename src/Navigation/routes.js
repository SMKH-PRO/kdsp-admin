import { Doctors, Home, Login, Clients } from "./../Screen";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
export const homePath = "/";

export const loginPath = "/login";
export const clientsPath = "/clients";
export const awaitingPath = "/awaiting"
export const doctorsPath = "/doctors";

const ROUTES = [
  {
    title: "login",
    path: loginPath,
    component: () => <Login />,
    visibleInSidebar: false,
    authRequired: false,
    icon: DashboardIcon,
  },
  {
    title: "Home",
    path: homePath,
    component: () => <Home />,
    visibleInSidebar: true,
    authRequired: true,
    icon: DashboardIcon,
    exact: true
  },
  {
    title: "Doctors",
    path: doctorsPath,
    component: () => <Doctors />,
    visibleInSidebar: true,
    authRequired: true,
    icon: LocalHospitalIcon,
    exact: true
  },
  {
    title: "Clients",
    path: clientsPath,
    component: () => <Clients />,
    visibleInSidebar: true,
    authRequired: true,
    icon: AssignmentIndIcon,
    exact: true
  },
  {
    title: "awaiting",
    path: awaitingPath,
    component: () => <Clients />,
    visibleInSidebar: true,
    authRequired: true,
    icon: AssignmentIndIcon,
    exact: true
  },
];

export default ROUTES;
