import React from "react";


import SeccionSubasta from "../componentes/SeccionSubasta";

import servicioSubasta from "../servicios/shared/servicioSubasta.js";

export default function SubastasProgramadas() {
    const[corta, setCorta]= React.useState([]);
    const[larga,setLarga]= React.useState([]);
    const[loading,setLoading]= React.useState(true);

    React.useEffect(()=>{
        Promise.all([servicioSubasta.consultarSubastaPorTipo("CORTA"),servicioSubasta.consultarSubastaPorTipo("LARGA")])
            .then(([subastaCortas, subastasLargas])=>{
                return [
                    subastaCortas.filter((subasta)=>subasta.estado==="PROGRAMADA"),
                    subastasLargas.filter((subasta)=>subasta.estado==="PROGRAMADA")
                ]           
            })
            .then(([subastaCortas, subastasLargas])=>{
                setCorta(subastaCortas);
                setLarga(subastasLargas);
            })
            .then(()=>setLoading(false));       
    },[]);

   
    
    if(loading){
        return(
            <React.Fragment>
                <h1>Cargando...</h1>
            </React.Fragment>
        );
    }


    return (
       <React.Fragment>
            <h1>Subastas Programadas</h1>
            <div className="subastas">
                <SeccionSubasta titulo ="Subastas de larga duración" elementos={larga}/>
                <SeccionSubasta titulo ="Subastas en tiempo real" elementos={corta}/>
            </div>
       </React.Fragment>


    );
}