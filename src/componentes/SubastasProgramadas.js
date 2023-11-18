import React from "react";


import SeccionSubasta from "../componentes/SeccionSubasta";

export default function SubastasProgramadas() {
    return (
       <React.Fragment>
            <h1>Subastas Programadas</h1>
            <div className="subastas">
                <SeccionSubasta titulo ="Subastas de larga duración"/>
                <SeccionSubasta titulo ="Subastas en tiempo real"/>
            </div>
       </React.Fragment>


    );
}