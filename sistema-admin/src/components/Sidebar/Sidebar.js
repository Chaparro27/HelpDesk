import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Menu from "@material-ui/core/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons components
import Clear from "@material-ui/icons/Clear";
import MenuIcon from "@material-ui/icons/Menu";

// core components
import componentStyles from "assets/theme/components/sidebar.js";
import { Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles(componentStyles);

export default function Sidebar({ routes, logo, dropdown, input }) {
  const classes = useStyles();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  
  const isMenuOpen = Boolean(anchorEl);
 
  const handleClick = () => {
    setOpen(!open);
  }; 

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "responsive-menu-id";
  // creates the links that appear in the left menu / Sidebar
  const createLinks = (routes) => {
    return routes.map( (prop, index) => {
      let textContent = (
        <>
          <Box minWidth="2.25rem" display="flex" alignItems="center">
            {typeof prop.icon === "string" ? (
              <Box
                component="i"
                className={prop.icon + " " + classes["text" + prop.iconColor]}
              />
            ) : null}
            {typeof prop.icon === "object" ? (
              <Box
                component={prop.icon}
                width="1.25rem!important"
                height="1.25rem!important"
                className={classes["text" + prop.iconColor]}
              />
            ) : null}
          </Box>
          {prop.name}
        </>
      );

      if (prop.collapse) {
        return (
          <div key="indez">
            <ListItem
              button onClick={handleClick}
              key={index}
              classes={{
                root:
                  classes.listItemRoot,
                selected: classes.listItemSelected,
              }}
              selected={
                location.pathname === prop.layout + prop.path
              }
            >
              {textContent}
              {open ? <ExpandLess className={classes.expand} /> : <ExpandMore className={classes.expand} />}
            </ListItem>
            <Collapse key="sdasdss" in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {
                  prop.List.map( (e, i) => {
                    return (<ListItem
                      key={i}
                      component={Link}
                      to={() => {let url = e.layout + e.path; return url}}
                      classes={{
                        root:
                          classes.listItemRootCollapse,
                        selected: classes.listItemSelected,
                      }}
                      selected={
                        location.pathname === e.layout + e.path
                      }
                    >
                      <Box minWidth="2.25rem" display="flex" alignItems="center">
                        {typeof e.icon === "string" ? (
                          <Box
                            component="i"
                            className={e.icon + " " + classes["text" + e.iconColor]}
                          />
                        ) : null}
                        {typeof e.icon === "object" ? (
                          <Box
                            component={e.icon}
                            width="1.25rem!important"
                            height="1.25rem!important"
                            className={classes["text" + e.iconColor]}
                          />
                        ) : null}
                      </Box>
                      {e.name}
                    </ListItem>
                  )})
                }
              </List>
            </Collapse>
          </div>
        );
      } else {
        return (
          <ListItem
            key={index}
            component={Link}
            onClick={handleMenuClose}
            to={() => {let url = prop.layout + prop.path; return url}}
            classes={{
              root:
                classes.listItemRoot,
              selected: classes.listItemSelected,
            }}
            selected={
              location.pathname === prop.layout + prop.path
            }
          >
            {textContent}
          </ListItem>
        );
      }
    });
  };
  let logoImage = (
    <img alt={logo.imgAlt} className={classes.logoClasses} src={logo.imgSrc} />
  );
  let logoObject =
    logo && logo.innerLink ? (
      <Link to={logo.innerLink} className={classes.logoLinkClasses}>
        {logoImage}
      </Link>
    ) : logo && logo.outterLink ? (
      <a href={logo.outterLink} className={classes.logoLinkClasses}>
        {logoImage}
      </a>
    ) : null;
  return (
    <>
      <Hidden smDown implementation="css">
        <Drawer variant="permanent" anchor="left" open>
          <Box paddingBottom="1rem">
            {logoObject}
          </Box>
          <List classes={{ root: classes.listRoot }}>
            {createLinks(routes)}
          </List>
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <AppBar position="relative" color="default" elevation={0}>
          <Toolbar>
            <Container
              display="flex!important"
              justifyContent="space-between"
              alignItems="center"
              marginTop=".75rem"
              marginBottom=".75rem"
              component={Box}
              maxWidth={false}
              padding="0!important"
            >
              <Box
                component={MenuIcon}
                width="2rem!important"
                height="2rem!important"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
              />
              {logoObject}
              {dropdown}
            </Container>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          id={menuId}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          classes={{ paper: classes.menuPaper }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingLeft="1.25rem"
            paddingRight="1.25rem"
            paddingBottom="1rem"
            className={classes.outlineNone}
          >
            {logoObject}
            <Box
              component={Clear}
              width="2rem!important"
              height="2rem!important"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleMenuClose}
            />
          </Box>
          <Box
            component={Divider}
            marginBottom="1rem!important"
            marginLeft="1.25rem!important"
            marginRight="1.25rem!important"
          />
          <Box paddingLeft="1.25rem" paddingRight="1.25rem">
            {input}
          </Box>
          <List classes={{ root: classes.listRoot }}>
            {createLinks(routes)}
          </List>
        </Menu>
      </Hidden>
    </>
  );
}

Sidebar.defaultProps = {
  routes: [],
};

Sidebar.propTypes = {
  // this is the input/component that will be rendered on responsive
  // in our demo, we add this input component since the AdminNavbar
  // will not be visible on responsive mode
  input: PropTypes.node,
  // this is the dropdown/component that will be rendered on responsive
  // in our demo, it is the same with the dropdown from the AdminNavbar
  // since the AdminNavbar will not be visible on responsive mode
  dropdown: PropTypes.node,
  // NOTE: we recommend that your logo has the following dimensions
  // // 135x40 or 487x144 or a resize of these dimensions
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(
    PropTypes.oneOfType([
      // this generates an anchor (<a href="href">..</a>) link
      // this is a link that is sent outside the app
      PropTypes.shape({
        // if this is set to true, than the link will have an absolute position
        // use wisely and with precaution
        href: PropTypes.string,
        name: PropTypes.string,
        icon: PropTypes.oneOfType([
          // this refers to icons such as ni ni-spaceship or fa fa-heart
          PropTypes.string,
          // this refers to icons from @material-ui/icons
          PropTypes.object,
        ]),
        iconColor: PropTypes.oneOf([
          "Primary",
          "PrimaryLight",
          "Error",
          "ErrorLight",
          "Warning",
          "WarningLight",
          "Info",
          "InfoLight",
        ]),
      }),
      // this generates a Link (<Link to="layout + path">..</Link>) link
      // this is a link that is sent inside the app
      PropTypes.shape({
        path: PropTypes.string,
        name: PropTypes.string,
        layout: PropTypes.string,
        component: PropTypes.func,
        icon: PropTypes.oneOfType([
          // this refers to icons such as ni ni-spaceship or fa fa-heart
          PropTypes.string,
          // this refers to icons from @material-ui/icons
          PropTypes.object,
        ]),
        iconColor: PropTypes.oneOf([
          "Primary",
          "PrimaryLight",
          "Error",
          "ErrorLight",
          "Warning",
          "WarningLight",
          "Info",
          "InfoLight",
        ]),
      }),
      // this is just a title without any action on it
      // you can think of it as a disabled link
      PropTypes.shape({
        title: PropTypes.string,
      }),
      // this is just a divider line
      PropTypes.shape({
        divider: true,
      }),
    ])
  ),
};
