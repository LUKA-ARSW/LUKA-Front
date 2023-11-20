import React from "react";

import Carrusel from "../componentes/Carrusel";

const subastas=[{Nombre:"Subasta 1", FechaInicio:"05-11-2023 14:00",FechaFin:"08-11-2023 14:00"},
                {Nombre:"Subasta 2", FechaInicio:"07-11-2023 14:00",FechaFin:"10-11-2023 14:00"}];

export default function SeccionSubasta(props) {
    const titulo = props.titulo; 
    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <Carrusel items={subastas}/>
        </React.Fragment>
    );
}
