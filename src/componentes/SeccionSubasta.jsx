import React from "react";

import Carrusel from "./Carrusel";
import servicioJwt from "../servicios/security/servicioJwt";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";

export default function SeccionSubasta(props) {
    const titulo = props.titulo; 

    const inscribirUsuario = (subasta) => {
        const usuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        props.inscribirUsuario(usuario.correo, subasta);    
    };
    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <Carrusel items={props.elementos} inscribirUsuario={inscribirUsuario}/>
        </React.Fragment>
    );
}
