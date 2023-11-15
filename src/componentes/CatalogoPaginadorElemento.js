import React from "react";

export default function CatalogoPaginadorElemento({elemento,accionConsulta}) {
    
    return(
        <React.Fragment>
            <p>Id: {elemento.id}</p>
            <p>nombre: {elemento.nombre}</p>
            <p>Precio: {elemento.precio}</p>
            <image></image>
             <button type="button" onClick={()=>accionConsulta(elemento.id)} >Consultar</button>
        </React.Fragment>      

    );

};