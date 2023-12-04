import React, { useEffect, useState } from "react";
import servicioAutenticado from "../servicios/security/servicioAutenticacion";
import { Route, useNavigate } from "react-router-dom";

export default function RutaProtegida({componente:Componente}){

    const[usuarioEstaAutenticado, setUsuarioEstaAutenticado]= useState(false);
    const navegacion = useNavigate();

    useEffect(() => {
        const verificarUsuario = servicioAutenticado.usuarioAutenticado();
        
        if (verificarUsuario) {
            setUsuarioEstaAutenticado(true);
        }else{
            navegacion("/login");
        }
    },[]);

    return(
        <React.Fragment>
        {
            usuarioEstaAutenticado && <Componente/>
        }     
        </React.Fragment>   


    );
}