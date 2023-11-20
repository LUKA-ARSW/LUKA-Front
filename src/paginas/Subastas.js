import React from "react";
import MenuEstadoSubasta from "../componentes/MenuEstadoSubasta";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";

export default function Subastas() {
    return(
        <React.Fragment>
            <Banner/>
            <Menu/>
            <MenuEstadoSubasta/>
        </React.Fragment>
    );
};