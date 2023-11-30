import React from "react";
import SeccionMisSubastasActivas from "./SeccionMisSubastasActivas";
import servicioSala from "../servicios/shared/servicioSala";

export default function MisSubastasActivas() {

    const [cortas, setCortas] = React.useState([])
    const [largas, setLargas] = React.useState([])
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        const infoUsuario = servicioJwt.decryptToken(servicioLocalStorage.getValue("token"));
        const comprador = {
            nombre: infoUsuario.nombre,
            correo: infoUsuario.correo
        }
        servicioSala.consultarSubastasPorUsuario(comprador.correo, "EN_CURSO")
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

    return(
        <div className="misSubastas">
            <SeccionMisSubastasActivas titulo ="Subastas de larga duración" elementos={largas} tipo={'larga-duracion'}/>
            <SeccionMisSubastasActivas titulo ="Subastas en tiempo real" elementos={cortas} tipo={'corta-duracion'}/>
        </div>
    );
};