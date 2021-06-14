import React from "react";


import ListCustom from "components/Lists/ListCustom";
import ModalCliente from "components/Modal/ModalCliente";
import CardVenta from "components/Cards/CardVenta";

const Ventas = () => {

    return (
        <>
            <ListCustom 
                card={CardVenta}
                modalComponent={ModalCliente}
            />
        </>
    );
}

export default Ventas;