/* eslint-disable no-extra-semi */
import PropTypes from "prop-types";

import React from "react";
import { Link } from "react-router-dom";

import Carrusel from "@componentes/contenedor/Carrusel";
import servicioJwt from "../servicios/security/servicioJwt";
import servicioLocalStorage from "../servicios/web/servicioLocalStorage";

function SeccionSubasta({ titulo, inscribirUsuario, elementos }) {
    const inscribirUsuarioASubasta = (subasta) => {
        const usuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        inscribirUsuario(usuario.correo, subasta);    
    };
    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <Carrusel>
                {
                    elementos.map((item, index) => (
                        <div key={index}>
                            <p>Nombre: {item.nombre}</p>
                            <p>Inicial el: {item.fechaInicio}</p>
                            <p>Termina el: {item.fechaFin}</p>
                            <Link to={`/subastas/${item.nombre}/info`}>
                                <button type="button">Consultar</button>
                            </Link>
                            <button type="button" onClick={() => inscribirUsuarioASubasta(item)}>Inscribirme</button>
                        </div>
                    ))
                }
            </Carrusel>
        </React.Fragment>
    );
};

SeccionSubasta.propTypes = {
    titulo: PropTypes.string.isRequired,
    elementos: PropTypes.array.isRequired,
    inscribirUsuario: PropTypes.func.isRequired
};


export default SeccionSubasta;
