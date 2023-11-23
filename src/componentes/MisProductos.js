import React from "react";
import { Link } from "react-router-dom";

import CatalogoPaginador from "../componentes/CatalogoPaginador";

export default function MisProductos() {
    return(
        <React.Fragment>
            <h1>Mis Productos</h1>
            <div className="paginador">
                <CatalogoPaginador numItems={3}/>
            </div>
            <div>
                <Link to={"/agregar-producto"}>
                    <button type="button">Agregar</button>
                </Link>
            </div>
        </React.Fragment>
    );
};