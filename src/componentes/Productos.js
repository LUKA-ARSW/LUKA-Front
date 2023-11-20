import React from "react";

import CatalogoPaginador from "../componentes/CatalogoPaginador";

export default function Productos() {
    return(
        <React.Fragment>
            <h1>Productos</h1>
            <div className="paginador">
                <CatalogoPaginador numItems={3}/>
            </div>
        </React.Fragment>
    );
};