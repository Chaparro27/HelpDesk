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
import Tickets from "views/admin/Catalogos/Tickets";
import Reportes from "views/admin/Catalogos/Reportes";
// @material-ui/icons components
import HomeIcon from '@material-ui/icons/Home';
import Person from "@material-ui/icons/Person";
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';

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
    name: "Empleados",
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
  /*    {
        path: "/usuarios",
        name: "Lista empleados",
        icon: PeopleIcon,
        iconColor: "Error",
        component: Usuarios,
        layout: "/admin",
      },*/
     {
        path: "/empleados",
        name: "Lista de empleados",
        icon: PeopleIcon,
        iconColor: "Error",
        component: Tickets,
        layout: "/admin",
      },
  /*    {
        path: "/reportes",
        name: "Reportes",
        icon: DescriptionIcon,
        iconColor: "Error",
        component: Reportes,
        layout: "/admin",
      }*/
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
