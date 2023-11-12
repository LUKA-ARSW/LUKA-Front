import React from "react";

import MenuEstadoSubasta from "../componentes/MenuEstadoSubasta";
import SeccionSubasta from "../componentes/SeccionSubasta";

export default function Subastas() {
    return (
      <React.Fragment>
        <MenuEstadoSubasta/>
        <div className="subastas">
            <SeccionSubasta titulo ="Subastas de larga duración"/>
            <SeccionSubasta titulo ="Subastas en tiempo real"/>
        </div>
      </React.Fragment>
    );
  }
