import React from "react";


import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import MenuEstadoMisSubastas from "../componentes/MenuEstadoMisSubastas";

export default function MisSubastas() {
    return (
      <React.Fragment>
        <Banner/>
        <Menu/>
        <MenuEstadoMisSubastas/>
      </React.Fragment>
    );
}
