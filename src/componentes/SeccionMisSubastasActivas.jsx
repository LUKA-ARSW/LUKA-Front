/* eslint-disable no-extra-semi */
import PropTypes from "prop-types";

import React from "react";
import { Link } from "react-router-dom";

import servicioSala from "../servicios/shared/servicioSala";
import Carrusel from "./contenedor/Carrusel/Carrusel";

function SeccionMisSubastasActivas({titulo, elementos, tipo}) {
    const [ subastas, setSubastas ] = React.useState([]);
    const [ loading, setLoading ]= React.useState(true);

    React.useEffect(() => {
        const promises = elementos.map(async (subasta) => {
            const sala = await servicioSala.consultarSalasPorSubasta(subasta.nombre); 
            return {
                ...subasta,
                sala: sala.nombre
            };
        });
        
        Promise.all(promises)
            .then((subastasConSala)=>setSubastas(subastasConSala))
            .then(()=>setLoading(false));
    }, [elementos]);

    if(loading){
        return(
            <h1>Cargando...</h1>
        );
    }

    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <Carrusel>
                {
                    subastas.map((item, index) => (
                        <div key={index}>
                            <p>Nombre: {item.nombre}</p>
                            <p>Inicial el: {item.fechaInicio}</p>
                            <p>Termina el: {item.fechaFin}</p>
                            <Link to={`/subastas/${item.nombre}/info`}>
                            <button type="button">Consultar</button>
                            </Link>
                            <Link to={`/subastas/${tipo}/${item.sala}`}>
                            <button type="button">Ingresar</button>
                            </Link>  
                        </div>
                    ))
                }
            </Carrusel>
        </React.Fragment>
    );
};

SeccionMisSubastasActivas.propTypes = {
    titulo: PropTypes.string.isRequired,
    elementos: PropTypes.array.isRequired,
    tipo: PropTypes.string.isRequired
};


export default SeccionMisSubastasActivas;