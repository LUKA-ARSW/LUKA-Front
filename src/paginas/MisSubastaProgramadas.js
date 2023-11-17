import React from "react";

import MenuEstadoSubasta from "../componentes/MenuEstadoSubasta";
import SeccionMisSubastasProgramadas from "../componentes/SeccionMisSubastasProgramadas";


export default function MisSubastasProgramadas() {
    return (
      <React.Fragment>
        <MenuEstadoSubasta/>
        <div className="misSubastas">
            <SeccionMisSubastasProgramadas titulo ="Subastas de larga duración"/>
            <SeccionMisSubastasProgramadas titulo ="Subastas en tiempo real"/>
        </div>
        <div>
            <button type="button">Agregar</button>
      </div>
      </React.Fragment>
    );
}