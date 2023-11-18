import React from "react";

import MisProductos from "./MisProductos";
import Productos from "./Productos";


export default function MenuCatalogosProductos() {
    const [pestanaActual, setPestanaActual] = React.useState("productos");

    return(
        <React.Fragment>
            <button type = "button" onClick = {() => setPestanaActual("productos")}>Productos</button>
            <button type = "button" onClick = {() => setPestanaActual("misProductos")}>Mis Productos</button>
            {pestanaActual === "productos" && <Productos/>}
            {pestanaActual === "misProductos" && <MisProductos/>}
        </React.Fragment>

    );
}