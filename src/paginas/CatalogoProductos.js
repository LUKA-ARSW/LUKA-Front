import React from "react";

import MenuCatalogosProductos from "../componentes/MenuCatalogosProductos";
import CatalogoPaginador from "../componentes/CatalogoPaginador";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";

export default function CatalogoProductos(){
    return(
        <React.Fragment>
            <Banner/> 
            <Menu/>
            <MenuCatalogosProductos/>
            <div className="paginador">
                <CatalogoPaginador numItems={3}/>
            </div>
        </React.Fragment>

    );
}