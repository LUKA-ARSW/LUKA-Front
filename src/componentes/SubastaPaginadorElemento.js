import React from "react";

export default function SubastaPaginadorElemento({elemento:elementoSubasta, accionConsulta, accionPujar}){
    return(
        <div>
            <h1>{elementoSubasta.producto.nombre}</h1>
            <button onClick={()=>accionConsulta(elementoSubasta.producto.id)}>Consultar</button>
            <button onClick={()=>accionPujar(elementoSubasta.producto.id)}>Pujar</button>
            <p>{elementoSubasta.compradores[0].nombre}</p>
            <p>{elementoSubasta.pujaMaxima}</p>

        </div>
    );

};