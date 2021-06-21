import React, { useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { useCookies } from 'react-cookie';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
// @material-ui/icons components
import Search from "@material-ui/icons/Search";

// core components
import Header from "components/Headers/Header.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import NavbarDropdown from "components/Dropdowns/NavbarDropdown.js";

import routes from "routes.js";

import componentStyles from "assets/theme/layouts/admin.js";
import ModalCustom from "components/Modal/ModalCustom";
import ModalIsFirst from "components/Modal/ModalIsFirst";
import { Get } from "actions/persistenceActions";
import ModalTicket from "components/Modal/ModalTicket";

const useStyles = makeStyles(componentStyles);

const Admin = () => {
  const classes = useStyles();
  const location = useLocation();
  const [cookies] = useCookies(['c_user']);
  const [listusers, setListusers] = useState([]);
  const [listclients, setListclients] = useState([]);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    const gets = async () => {
      await Get("user/").then(result => setListusers(result));
      await Get("clients/").then(result => setListclients(result));
    };
    gets();
  }, [location]);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        if (prop.List) {
          return prop.List.map((prop2, key2) => {
            return (
              <Route
                path={prop.layout + prop2.path}
                component={prop2.component}
                key={key2}
              />
            );
          });
        } else {
          return (
            <Route
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          );
        }
      } else {
        return null;
      }
    });
  };

  const getBrandText = () => {
    return routes.map( e => {
      if (e.List) {
        return e.List.map( el => {
          let pathname = el.layout + el.path
          if (location.pathname === pathname) {
            return el.name
          }
        });
      } else if (location.pathname === e.layout + e.path ) {
        return e.name;
      }
    });
  };

  return (
    <>
      <>
        <Sidebar
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: require("../assets/img/brand/VadoGradient.png").default,
            imgAlt: "...",
          }}
          dropdown={<NavbarDropdown />}
          input={
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-search-responsive">
                Search
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-search-responsive"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <Box
                      component={Search}
                      width="1.25rem!important"
                      height="1.25rem!important"
                    />
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          }
        />
        <Box position="relative" className={classes.mainContent}>
          <AdminNavbar brandText={getBrandText(location.pathname)} />
          
          {
            cookies.c_user.isFirst 
              ? <ModalCustom 
                  // handleModalClose={ handleModalClose }
                  openModal={ true }
                  component={ ModalIsFirst }
                /> 
              : null
          }
          <Header 
            pathname={getBrandText(location.pathname)}  
            users={listusers}
            clients={listclients} />
          <Switch>
            {getRoutes(routes)}
            <Redirect from="*" to="/admin/index" /> 
          </Switch>
          <Container
            maxWidth={false}
            component={Box}
            classes={{ root: classes.containerRoot }}
          >
            <AdminFooter />
          </Container>
        </Box>
      </>
    </>
  );
};

export default Admin;
