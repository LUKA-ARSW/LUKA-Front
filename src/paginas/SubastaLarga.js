import React from "react";

import SubastaPaginador from "../componentes/SubastaPaginador";
import { useParams } from "react-router-dom";
import salaServicios from "../servicios/shared/servicioSala.js";

export default function SubastaLarga() {
    const [subastaInfo, setSubastaInfo] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const {idSala} = useParams();

    React.useEffect(()=>{
        salaServicios.consultarSalaPorNombre(idSala)
                .then((resultadoConsulta)=>setSubastaInfo(resultadoConsulta))
                .then(()=>setLoading(false));
                             
    },[]);
    
    if(loading){
        return(
            <React.Fragment>
                <h1>Cargando...</h1>
            </React.Fragment>
        );
    }

    return(
        <React.Fragment>
            <h1>Subasta id: {idSala}</h1>
            <h1>{subastaInfo.subasta.nombre}</h1>
            <p>Inicia el: {subastaInfo.subasta.fechaInicio}</p>
            <p>Termina el: {subastaInfo.subasta.fechaFin}</p>
            <p>Estado:{subastaInfo.subasta.estado}</p>
            <h1>Productos:</h1>
            <SubastaPaginador numItems={3} elementos={subastaInfo.elementoSubasta} nombreSala={idSala}/>
        </React.Fragment>
    );

};