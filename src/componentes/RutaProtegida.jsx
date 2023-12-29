import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import useAuth from "@hooks/useAuth";

export default function RutaProtegida({componente:Componente}){

    const { isAuthenticated } = useAuth();
    const navegacion = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navegacion("/login");
        }
    },[isAuthenticated, navegacion]);

    return(
        <React.Fragment>
        {
            isAuthenticated && <Componente/>
        }     
        </React.Fragment>   


    );
}