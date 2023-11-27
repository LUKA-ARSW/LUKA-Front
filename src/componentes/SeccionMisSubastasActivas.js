import React from "react";

import CarruselMisSubastasActivas from "./CarruselMisSubastasActivas";

export default function SeccionMisSubastasActivas(props) {
    const titulo = props.titulo; 
    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <CarruselMisSubastasActivas items={props.elementos}/>
        </React.Fragment>
    );
}