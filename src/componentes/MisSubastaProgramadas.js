import React from "react";


import SeccionMisSubastasProgramadas from "./SeccionMisSubastasProgramadas";


export default function MisSubastasProgramadas() {
    return (
      <React.Fragment>
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