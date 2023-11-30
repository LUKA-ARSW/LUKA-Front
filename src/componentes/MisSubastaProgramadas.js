import React from "react";
import { Link } from "react-router-dom";

import SeccionMisSubastasProgramadas from "./SeccionMisSubastasProgramadas";
import servicioSala from "../servicios/shared/servicioSala";


export default function MisSubastasProgramadas() {

  const [cortas, setCortas] = React.useState([]);
  const [largas, setLargas] = React.useState([])
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
    const comprador = {
      nombre: infoUsuario.nombre,
      correo: infoUsuario.correo
  }
  servicioSala.consultarSubastasPorUsuario(comprador.correo, "PROGRAMADA")
    .then((subastasDelUsuario)=>[
      subastasDelUsuario.filter((subasta)=>subasta.tipoSubasta==="LARGA"),
      subastasDelUsuario.filter((subasta)=>subasta.tipoSubasta==="CORTA")
    ])
    .then(([subastasLargas, subastasCortas])=>{
      setLargas(subastasLargas);
      setCortas(subastasCortas);
    })
    .then(()=>setLoading(false))
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
      <div className="misSubastas">
          <SeccionMisSubastasProgramadas titulo ="Subastas de larga duración" elementos={largas} />
          <SeccionMisSubastasProgramadas titulo ="Subastas en tiempo real" elementos={cortas}/>
      </div>
      <div>
          <Link to={"/agregar-subasta"}>
          <button type="button">Agregar</button>
          </Link>
      </div>
  </React.Fragment>
  );
}
