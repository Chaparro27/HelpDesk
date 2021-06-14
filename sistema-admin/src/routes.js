// core components
import Dashboard from "views/admin/Dashboard.js";
import Icons from "views/admin/Icons.js";
import Login from "views/auth/Login.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Register from "views/auth/Register.js";
import Tables from "views/admin/Tables.js";
import Clientes from "views/admin/Clientes";
import Usuarios from "views/admin/Catalogos/Usuarios";
// @material-ui/icons components
import HomeIcon from '@material-ui/icons/Home';
import Person from "@material-ui/icons/Person";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';

var routes = [
  {
    path: "/index",
    name: "Home",
    icon: HomeIcon,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/clientes",
    name: "Clientes",
    icon: AssignmentIndIcon,
    iconColor: "Primary",
    component: Clientes,
    layout: "/admin",
  },
  
  {
    name: "Catalogos",
    collapse: true,
    icon: LibraryBooksIcon,
    iconColor: "Primary",
    layout: "/admin",
    List: [
      {
        path: "/usuarios",
        name: "Usuarios",
        icon: PeopleIcon,
        iconColor: "Error",
        component: Usuarios,
        layout: "/admin",
      },
    ]
  },
  {
    path: "/user-profile",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/login",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    component: Register,
    layout: "/auth",
  },
];
export default routes;
