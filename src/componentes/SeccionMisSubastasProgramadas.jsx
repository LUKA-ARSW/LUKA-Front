import { PropTypes } from "prop-types";

import React from "react";
import { Link } from "react-router-dom";

import Carrusel from "@componentes/contenedor/Carrusel";
import { ReactComponent as DeleteIcon } from '@assets/icon/trash-can.svg';


function SeccionMisSubastasProgramadas({ titulo, elementos }) {

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

                            <button type="button">Modificar</button>
                            <Link to={`/subastas/${item.nombre}/info`}>
                                <button type="button">Consultar</button>
                            </Link>
                            <button type="button">
                                <DeleteIcon />
                            </button>
                        </div>
                    ))
                }
            </Carrusel>
        </React.Fragment>

    );

}

SeccionMisSubastasProgramadas.propTypes = {
    titulo: PropTypes.string.isRequired,
    elementos: PropTypes.array.isRequired
};

export default SeccionMisSubastasProgramadas;