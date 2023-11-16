import React from "react";

import MenuEstadoSubasta from "../componentes/MenuEstadoSubasta";
import SeccionMisSubastasActivas from "../componentes/SeccionMisSubastasActivas";

export default function MisSubastas() {
    return (
      <React.Fragment>
        <MenuEstadoSubasta/>
        <div className="misSubastas">
            <SeccionMisSubastasActivas titulo ="Subastas de larga duración"/>
            <SeccionMisSubastasActivas titulo ="Subastas en tiempo real"/>
        </div>
      </React.Fragment>
    );
}
