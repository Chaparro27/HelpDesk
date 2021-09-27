import React, {useState, useEffect} from "react";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import TableCustom from "components/Tables/TableCustom";
import ButtonsActionsMenu from "components/Tables/ButtonsActionsMenu";
import { GetClients,DeleteClients } from '../../../actions/clientesActions';
import componentStyles from "assets/theme/views/admin/catalogos/usuarios";
import ModalCreateUser from "components/Modal/ModalCreateUser";

const useStyles = makeStyles(componentStyles);

const Usuarios = () => {
    const classes = useStyles();
    const [data, setData] = React.useState([])
    const header = [
        "ID",
        "Nombre de cliente",
        "Correo",
        "Fecha de ingreso"
    ];

    useEffect(() => {
        const fetchData = async () => {
            const resp = await GetClients('clients/');
            setData(resp);        
        }
        fetchData();
    }, []); 

    const body = (e) =>  
        <>
            <TableRow>
                <TableCell classes={{ root: classes.tableCellRoot }}>
                    {e.idCliente}
                </TableCell>
                <TableCell classes={{ root: classes.tableCellRoot }}>
                    {e.nombreClient}
                </TableCell>
                <TableCell classes={{ root: classes.tableCellRoot }}>
                    {e.correo}
                </TableCell>
                <TableCell classes={{ root: classes.tableCellRoot }}>
                    {e.fecha}
                </TableCell>
                <ButtonsActionsMenu/>
            </TableRow>
        </>
    return (
        <>
            <TableCustom 
                tablename="Tabla usuarios" 
                header={header} 
                body={body} 
                modal={ModalCreateUser}
                data={data}
                />
        </>
    );
}

export default Usuarios;