import React from "react";

import CarruselMisSubastasActivas from "./CarruselMisSubastasActivas";

const subastas=[{Nombre:"Subasta 1", FechaInicio:"05-11-2023 14:00",FechaFin:"08-11-2023 14:00"},
                {Nombre:"Subasta 2", FechaInicio:"07-11-2023 14:00",FechaFin:"10-11-2023 14:30"}];

export default function SeccionMisSubastasActivas(props) {
    const titulo = props.titulo; 
    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <CarruselMisSubastasActivas items={subastas}/>
        </React.Fragment>
    );
}