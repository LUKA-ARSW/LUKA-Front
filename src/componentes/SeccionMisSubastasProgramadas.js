import React from "react";

import CarruselMisSubastasProgramadas from "./CarruselMisSubastasProgramadas";


export default function SeccionMisSubastasProgramadas(props) {
    const titulo = props.titulo;
    return(
    <React.Fragment>
        <h1>{titulo}</h1>
        <CarruselMisSubastasProgramadas items={props.elementos}/>

    </React.Fragment>

    );

}          