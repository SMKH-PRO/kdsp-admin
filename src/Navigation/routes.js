import {
  Doctors,
  Home,
  Login,
  Clients,
  Schedule,
  AddSchedule,
} from "./../Screen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DateRangeIcon from "@mui/icons-material/DateRange";
export const homePath = "/";

export const loginPath = "/login";
export const clientsPath = "/clients";
export const awaitingPath = "/awaiting"
export const doctorsPath = "/doctors";
export const schedulesPath = "/schedules";
export const addSchedulesPath = "/add-schedule";

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
    exact: true,
  },
  {
    title: "Doctors",
    path: doctorsPath,
    component: () => <Doctors />,
    visibleInSidebar: true,
    authRequired: true,
    icon: LocalHospitalIcon,
    exact: true,
  },
  {
    title: "Clients",
    path: clientsPath,
    component: () => <Clients />,
    visibleInSidebar: true,
    authRequired: true,
    icon: AssignmentIndIcon,
    exact: true,
  },
  {
    title: "Wait List",
    path: awaitingPath,
    component: () => <Clients />,
    visibleInSidebar: true,
    authRequired: true,
    icon: AssignmentIndIcon,
    title: "Schedules",
    path: schedulesPath,
    component: () => <Schedule />,
    visibleInSidebar: true,
    authRequired: true,
    icon: DateRangeIcon,
    exact: true,
  },
  {
    title: "Add Schedules",
    path: addSchedulesPath,
    component: () => <AddSchedule />,
    visibleInSidebar: false,
    authRequired: true,
    icon: DateRangeIcon,
    exact: true,
  },
];

export default ROUTES;
