import React from "react";

import SubastaPaginador from "../componentes/SubastaPaginador";
import { useParams } from "react-router-dom";

const informacionSubasta = {
    id:"SubLuka01",
    nombre:"Subasta GOLD",
    fechaInicio:"31-11-2023 14:00",
    fechaFin:"01-12-2023 14:00",
    estado:"ACTIVA"
}

export default function SubastaLarga() {
    const [subastaInfo, setSubastaInfo] = React.useState(informacionSubasta);
    const {idSubasta} = useParams();

    return(
        <React.Fragment>
            <h1>Subasta id: {idSubasta}</h1>
            <h1>{subastaInfo.nombre}</h1>
            <p>Inicia el: {subastaInfo.fechaInicio}</p>
            <p>Termina el: {subastaInfo.fechaFin}</p>
            <p>Estado:{subastaInfo.estado}</p>
            <h1>Productos:</h1>
            <SubastaPaginador numItems={3}/>
        </React.Fragment>
    );

};