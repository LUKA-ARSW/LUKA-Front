import React from "react";

import MenuEstadoSubasta from "../componentes/MenuEstadoSubasta";
import SeccionMisSubastasActivas from "../componentes/SeccionMisSubastasActivas";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";

export default function MisSubastas() {
    return (
      <React.Fragment>
        <Banner/>
        <Menu/>
        <MenuEstadoSubasta/>
        <div className="misSubastas">
            <SeccionMisSubastasActivas titulo ="Subastas de larga duración"/>
            <SeccionMisSubastasActivas titulo ="Subastas en tiempo real"/>
        </div>
      </React.Fragment>
    );
}
