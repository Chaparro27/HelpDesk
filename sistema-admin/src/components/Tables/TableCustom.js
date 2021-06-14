import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// @material-ui/lab components
import Pagination from "@material-ui/lab/Pagination";
// @material-ui/icons components
import AddCircleIcon from '@material-ui/icons/AddCircle';

import componentStyles from "assets/theme/views/admin/catalogos/usuarios";
import ModalCustom from "components/Modal/ModalCustom";

const useStyles = makeStyles(componentStyles);

const TableCustom = ({ tablename, header, body, modal, data }) => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [page2, setPage2] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5); 


    const handleModalopen = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
        <Container
                maxWidth={false}
                component={Box}
                marginTop="-15rem"
                classes={{ root: classes.containerRoot }}
            >
                <Card classes={{ root: classes.cardRoot }}>
                    <CardHeader
                        className={classes.cardHeader}
                        title={tablename}
                        action={
                            <IconButton
                                edge="start"
                                size="small"
                                onClick={ handleModalopen }
                                className={ classes.buttons }
                                color="inherit" >
                                <AddCircleIcon  className={ classes.addicon } />
                            </IconButton>}
                        titleTypographyProps={{
                            component: Box,
                            marginBottom: "0!important",
                            variant: "h3",
                            justifyContent: "space-between"
                        }}
                    ></CardHeader>
                    <TableContainer>
                        <Table
                            size="small"
                            alignItems="center"
                            marginBottom="0!important"
                        >
                            <TableHead>
                                <TableRow>
                                    {
                                        header.map( e => (
                                            <TableCell
                                                classes={{
                                                    root: classes.tableCellRoot + " " + classes.tableCellRootHead,
                                                }}
                                            > {e} </TableCell>)
                                        )
                                    }
                                    <TableCell
                                        classes={{
                                            root: classes.tableCellRoot + " " + classes.tableCellRootHead,
                                        }}
                                        align="right"
                                    > acciones </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                data.slice(page2*rowsPerPage, page2*rowsPerPage+rowsPerPage).map( e => body(e))
                            }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box
                        classes={{ root: classes.cardActionsRoot }}
                        component={CardActions}
                        justifyContent="flex-end"
                    >
                        <Pagination 
                            count={Math.max(0, Math.ceil(data.length / rowsPerPage))} 
                            page={page}
                            // defaultPage={page}
                            onChange={(event, page) => {
                                setPage(page);
                                setPage2(page-1)
                            }}
                            color="primary" 
                            variant="outlined" 
                            />
                    </Box>
                </Card>
                <ModalCustom
                    handleModalopen={handleModalopen}
                    openModal={isOpen}
                    component={modal} />
            </Container>
        </>
    );
};

export default TableCustom;