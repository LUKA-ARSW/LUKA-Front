import React from "react";

import CarruselMisSubastasActivas from "./CarruselMisSubastasActivas";
import servicioSala from "../servicios/shared/servicioSala";

export default function SeccionMisSubastasActivas(props) {
    const titulo = props.titulo; 
    const [subastas, setSubastas] = React.useState([]);
    const[loading,setLoading]= React.useState(true);

    React.useEffect(() => {
        const promises = props.elementos.map(async (subasta) => {
            const sala = await servicioSala.consultarSalasPorSubasta(subasta.nombre); 
            return {
                ...subasta,
                sala: sala.nombre
            };
        });
        
        Promise.all(promises)
        .then((subastasConSala)=>setSubastas(subastasConSala))
        .then(()=>setLoading(false));
    }, []);

    if(loading){
        return(
            <React.Fragment>
                <h1>Cargando...</h1>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <h1>{titulo}</h1>
            <CarruselMisSubastasActivas items={subastas} tipo={props.tipo}/>
        </React.Fragment>
    );
}