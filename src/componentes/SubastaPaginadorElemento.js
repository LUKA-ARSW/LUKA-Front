import React from "react";

export default function SubastaPaginadorElemento({elemento:elementoSubasta, accionConsulta, accionPujar}){
  
    return(
        <div>
            <h1>{elementoSubasta.producto.nombre}</h1>
            <button onClick={()=>accionConsulta(elementoSubasta.producto.idProducto)}>Consultar</button>
            <button onClick={()=>accionPujar(elementoSubasta.producto.idProducto)}>Pujar</button>
            <p>{elementoSubasta.compradores[0]?.first.nombre??"No hay pujas aun"}</p>
            <p>{elementoSubasta.pujaMaxima}</p>

        </div>
    );

};