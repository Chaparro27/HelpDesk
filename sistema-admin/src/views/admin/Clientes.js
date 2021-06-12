import React from "react";

import ListCustom from "components/Lists/ListCustom";
import CardClient from "components/Cards/CardClient";
import ModalCliente from "components/Modal/ModalCliente";

const Clientes = () => {

    return(
        <>
            <ListCustom 
                card={CardClient}
                modalComponent={ModalCliente}
            />
        </>
    );
}

export default Clientes;