import React from "react";

import MenuCatalogosProductos from "../componentes/MenuCatalogosProductos";

import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";

export default function CatalogoProductos(){
    return(
        <React.Fragment>
            <Banner/> 
            <Menu/>
            <MenuCatalogosProductos/>
        </React.Fragment>

    );
}