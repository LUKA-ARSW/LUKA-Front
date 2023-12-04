import React from "react";

import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";

import Subastas from "../componentes/SubastasActivas"

export default function PaginaPrincipal() {
  return (
    <React.Fragment>
        <Banner/>
        <Menu/>
        <Subastas/>

    </React.Fragment>
  );
}