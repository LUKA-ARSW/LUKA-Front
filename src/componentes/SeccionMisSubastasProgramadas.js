import React from "react";

import CarruselMisSubastasProgramadas from "./CarruselMisSubastasProgramadas";

const subastas=[{Nombre:"Subasta01", FechaInicio:"16-12-2023 08:00",FechaFin:"16-12-2023 23:55"},
                {Nombre:"Subasta navidad02", FechaInicio:"23-12-2023 05:30",FechaFin:"23-12-2023 23:55"}];

export default function SeccionMisSubastasProgramadas(props) {
    const titulo = props.titulo;
    return(
    <React.Fragment>
        <h1>{titulo}</h1>
        <CarruselMisSubastasProgramadas items={subastas}/>

    </React.Fragment>

    );

}          