import React from "react";
// @material-ui/core components
import { 
    Paper,
    makeStyles,
    Box,
    Button,
    Divider,
    Menu,
    MenuItem,
    Typography,
} from "@material-ui/core";

// @material-ui/icons components
import DirectionsRun from "@material-ui/icons/DirectionsRun";
import EventNote from "@material-ui/icons/EventNote";
import LiveHelp from "@material-ui/icons/LiveHelp";
import Person from "@material-ui/icons/Person";
import Settings from "@material-ui/icons/Settings";
import MoreVertIcon from '@material-ui/icons/MoreVert';

// core components
import componentStyles from "assets/theme/components/filter-dropdown";

const useStyles = makeStyles(componentStyles);

const FilterDropdown = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = "primary-filter-menu";
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Typography
                variant="h6"
                component="h6"
                classes={{ root: classes.menuTitle }}
            >
                Filtros
            </Typography>
            <Box
                display="flex!important"
                alignItems="center!important"
                component={MenuItem}
                onClick={handleMenuClose}
            >
                <Box
                    component={LiveHelp}
                    width="1.25rem!important"
                    height="1.25rem!important"
                    marginRight="1rem"
                />
                <span>Support</span>
            </Box>
            <Divider component="div" classes={{ root: classes.dividerRoot }} />
            <Box
                display="flex!important"
                alignItems="center!important"
                component={MenuItem}
                onClick={handleMenuClose}
            >
                <Box
                    component={DirectionsRun}
                    width="1.25rem!important"
                    height="1.25rem!important"
                    marginRight="1rem"
                />
                <span>Logout</span>
            </Box>
        </Menu>
    );

    return (
        <>
            <Button
                variant="text"
                color="primary"
                classes={{
                    label: classes.buttonLabel,
                    root: classes.buttonRoot
                }}
                onClick={handleProfileMenuOpen}
            >
                <Typography variant="button"> Filter </Typography>
                <Box
                    component={MoreVertIcon}
                    width="1.25rem!important"
                    height="1.25rem!important"
                /> 
            </Button>
            {renderMenu}
        </>
    );
}

export default FilterDropdown;