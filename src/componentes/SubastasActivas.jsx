import React from "react";

import SeccionSubasta from "./SeccionSubasta";

import servicioSubasta from "../servicios/shared/servicioSubasta";

export default function Subastas() {
  const[corta, setCorta]= React.useState([]);
  const[larga,setLarga]= React.useState([]);
  const[loading,setLoading]= React.useState(true);

  React.useEffect(()=>{
    Promise.all([servicioSubasta.consultarSubastaPorTipo("CORTA"),servicioSubasta.consultarSubastaPorTipo("LARGA")])
        .then(([subastaCortas, subastasLargas])=>{
            return [
                subastaCortas.filter((subasta)=>subasta.estado==="EN_CURSO"),
                subastasLargas.filter((subasta)=>subasta.estado==="EN_CURSO")
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
  );}

    return (
      <div className="subastas">
        <SeccionSubasta titulo ="Subastas de larga duración" elementos={larga}/>
        <SeccionSubasta titulo ="Subastas en tiempo real" elementos={corta}/>
      </div>
    );
}
