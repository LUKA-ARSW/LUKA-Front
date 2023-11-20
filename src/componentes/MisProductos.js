import React from "react";

import CatalogoPaginador from "../componentes/CatalogoPaginador";

export default function MisProductos() {
    return(
        <React.Fragment>
            <h1>Mis Productos</h1>
            <div className="paginador">
                <CatalogoPaginador numItems={3}/>
            </div>
        </React.Fragment>
    );
};