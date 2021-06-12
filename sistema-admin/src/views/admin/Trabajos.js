import React from "react";

import CardTrabajo from "components/Cards/CardTrabajo";
import ListCustom from "components/Lists/ListCustom";

const Trabajos = () => {

    return (
        <> 
            <ListCustom 
                card={CardTrabajo}
                modalComponent={null}
            />
        </>
    );
}

export default Trabajos;