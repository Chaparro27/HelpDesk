import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Box from "@material-ui/core/Box";

import MoreVert from "@material-ui/icons/MoreVert";

import componentStyles from "assets/theme/views/admin/catalogos/usuarios";

const useStyles = makeStyles(componentStyles);

const ButtonsActionsMenu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const handleClick = (event) => {
        switch (event.currentTarget.getAttribute("aria-controls")) {
            case "simple-menu-2":
                setAnchorEl2(event.currentTarget);
                break;
            default:
        }
    };
    const handleClose = () => {
        setAnchorEl2(null);
    };
    return(
        <TableCell
            classes={{ root: classes.tableCellRoot }}
            align="right" >
            <Box
                aria-controls="simple-menu-2"
                aria-haspopup="true"
                onClick={handleClick}
                size="medium"
                component={IconButton}
                width="2rem!important"
                height="2rem!important"
                minWidth="2rem!important"
                minHeight="2rem!important"
            >
                <Box
                    component={MoreVert}
                    width="1.25rem!important"
                    height="1.25rem!important"
                    position="relative"
                    top="2px"
                    color={theme.palette.gray[500]}
                />
            </Box>
            <Menu
                id="simple-menu-2"
                anchorEl={anchorEl2}
                keepMounted
                open={Boolean(anchorEl2)}
                onClose={handleClose}
            >
                <MenuItem  onClick={setOpen}>Modificar</MenuItem>
            </Menu>
        </TableCell>
    );
};

export default ButtonsActionsMenu;