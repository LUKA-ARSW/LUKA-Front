import React from "react";

export default function CatalogoPaginadorElemento({elemento,accionConsulta}) {
    
    return(
        <React.Fragment>
            <p>Id: {elemento.idProducto}</p>
            <p>nombre: {elemento.nombre}</p>
            <p>Precio: {elemento.precio}</p>
            <image></image>
             <button type="button" onClick={()=>accionConsulta(elemento.idProducto)} >Consultar</button>
        </React.Fragment>      

    );

};