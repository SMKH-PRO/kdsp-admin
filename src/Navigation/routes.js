import {
  Doctors,
  Home,
  Login,
  Clients,
  Schedule,
  AddSchedule,
  AddDoctor
} from "./../Screen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Awaiting from '../Screen/Awaiting';
import { AccessTime } from "@mui/icons-material";

export const homePath = "/";

export const loginPath = "/login";
export const clientsPath = "/clients";
export const awaitingPath = "/awaiting"
export const doctorsPath = "/doctors";
export const adddoctorsPath = "/add-doctors";
export const schedulesPath = "/schedules";
export const addSchedulesPath = "/add-schedule";

const ROUTES = [
  {
    title: "login",
    path: loginPath,
    component: (props) => <Login {...props} />,
    visibleInSidebar: false,
    authRequired: false,
    icon: DashboardIcon,
  },
  {
    title: "Home",
    path: homePath,
    component: (props) => <Home {...props} />,
    visibleInSidebar: true,
    authRequired: true,
    icon: DashboardIcon,
    exact: true,
  },
  {
    title: "Doctors",
    path: doctorsPath,
    component: (props) => <Doctors {...props} />,
    visibleInSidebar: true,
    authRequired: true,
    icon: LocalHospitalIcon,
    exact: true,
  },
  {
    title: "Clients",
    path: clientsPath,
    component: (props) => <Clients {...props} />,
    visibleInSidebar: true,
    authRequired: true,
    icon: AssignmentIndIcon,
    exact: true,
  },
  {
    title: "Wait List",
    path: awaitingPath,
    component: (props) => <Awaiting {...props} />,
    visibleInSidebar: true,
    authRequired: true,
    icon: AccessTime,
    exact: true
  },
  {
    title: "Schedules",
    path: schedulesPath,
    component: (props) => <Schedule {...props} />,
    visibleInSidebar: true,
    authRequired: true,
    icon: DateRangeIcon,
    exact: true,
  },
  {
    title: "Add Schedules",
    path: addSchedulesPath,
    component: (props) => <AddSchedule {...props} />,
    visibleInSidebar: false,
    authRequired: true,
    icon: DateRangeIcon,
    exact: true,
  },
  {
    title: "Add Doctor",
    path: adddoctorsPath,
    component: (props) => <AddDoctor {...props} />,
    visibleInSidebar: false,
    authRequired: true,
    icon: DateRangeIcon,
    exact: true,
  },
];

export default ROUTES;
