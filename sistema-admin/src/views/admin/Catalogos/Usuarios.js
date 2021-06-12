import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

import TableCustom from "components/Tables/TableCustom";
import ButtonsActionsMenu from "components/Tables/ButtonsActionsMenu";

import componentStyles from "assets/theme/views/admin/catalogos/usuarios";
import ModalCreateUser from "components/Modal/ModalCreateUser";

const useStyles = makeStyles(componentStyles);

const Usuarios = () => {
    const classes = useStyles();
    const header = [
        "ID",
        "Nombre de usaurio",
    ];

    const data = [
        {
            id: "1",
            username: "efrenhhi"
        },
        {
            id: "2",
            username: "Chaparro27"
        },
        {
            id: "3",
            username: "LoopyGames"
        },
        {
            id: "4",
            username: "JoseIsiro"
        },
        {
            id: "5",
            username: "Kuriwale"
        },
        {
            id: "6",
            username: "Sh1r0"
        },
        {
            id: "7",
            username: "Chaparro27"
        },
        {
            id: "8",
            username: "LoopyGames"
        },
        {
            id: "9",
            username: "JoseIsiro"
        },
        {
            id: "10",
            username: "Kuriwale"
        },
        {
            id: "11",
            username: "Sh1r0"
        },
        {
            id: "12",
            username: "Chaparro27"
        },
        {
            id: "13",
            username: "LoopyGames"
        },
        {
            id: "14",
            username: "JoseIsiro"
        },
        {
            id: "15",
            username: "Kuriwale"
        },
        {
            id: "16",
            username: "Sh1r0"
        },
        {
            id: "17",
            username: "Chaparro27"
        },
        {
            id: "18",
            username: "LoopyGames"
        },
        {
            id: "19",
            username: "JoseIsiro"
        },
        {
            id: "20",
            username: "Kuriwale"
        },
        {
            id: "21",
            username: "Sh1r0"
        },
        {
            id: "22",
            username: "Chaparro27"
        },
        {
            id: "23",
            username: "LoopyGames"
        },
        {
            id: "24",
            username: "JoseIsiro"
        },
        {
            id: "25",
            username: "Kuriwale"
        },
        {
            id: "26",
            username: "Sh1r0"
        }
    ]
    const body = (e) =>  
        <>
            <TableRow>
                <TableCell classes={{ root: classes.tableCellRoot }}>
                    {e.id}
                </TableCell>
                <TableCell classes={{ root: classes.tableCellRoot }}>
                    {e.username}
                </TableCell>
                <ButtonsActionsMenu 

                />
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