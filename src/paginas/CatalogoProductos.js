import React from "react";

import MenuCatalogosProductos from "../componentes/MenuCatalogosProductos";
import CatalogoPaginador from "../componentes/CatalogoPaginador";

export default function CatalogoProductos(){
    return(
        <React.Fragment>
            <MenuCatalogosProductos/>
            <div className="paginador">
                <CatalogoPaginador numItems={3}/>
            </div>
        </React.Fragment>

    );
}