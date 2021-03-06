import {
  Doctors,
  Home,
  Login,
  Clients,
  Schedule,
  AddSchedule,
  AddDoctor,
  DoctorDetails,
  MasterSheet
} from "./../Screen";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MasterSchedule from "@mui/icons-material/Schedule"
import Awaiting from '../Screen/Awaiting';
import { AccessTime } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';

export const homePath = "/";

export const loginPath = "/login";
export const clientsPath = "/clients";
export const awaitingPath = "/awaiting"
export const doctorsPath = "/doctors";
export const adddoctorsPath = "/add-doctors";
export const schedulesPath = "/schedules";
export const addSchedulesPathWithId = "/add-schedule/:id";
export const addSchedulesPath = "/add-schedule";
export const doctorDetailsPath = "/doctor-details/:id";
export const masterSheetPath = "/master-sheet";

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
    title: "Add Schedules",
    path: addSchedulesPathWithId,
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
  {
    title: "Doctor Details",
    path: doctorDetailsPath,
    component: (props) => <DoctorDetails {...props} />,
    visibleInSidebar: false,
    authRequired: true,
    icon: DateRangeIcon,
    exact: true,
  },
  {
    title: "Master Sheet",
    path: masterSheetPath,
    component: (props) => <MasterSheet {...props} />,
    visibleInSidebar: true,
    authRequired: false,
    icon: ArticleIcon,
    exact: true,
  },
];

export default ROUTES;
