import React from "react";

import Carrusel from "./Carrusel";

export default function SeccionSubasta(props) {
    const titulo = props.titulo; 
    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <Carrusel items={props.elementos}/>
        </React.Fragment>
    );
}
