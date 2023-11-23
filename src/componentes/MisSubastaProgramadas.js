import React from "react";
import { Link } from "react-router-dom";

import SeccionMisSubastasProgramadas from "./SeccionMisSubastasProgramadas";


export default function MisSubastasProgramadas() {
    return (
      <React.Fragment>
        <div className="misSubastas">
            <SeccionMisSubastasProgramadas titulo ="Subastas de larga duración"/>
            <SeccionMisSubastasProgramadas titulo ="Subastas en tiempo real"/>
        </div>
        <div>
        <Link to={"/agregar-subasta"}>
            <button type="button">Agregar</button>
        </Link>
      </div>
      </React.Fragment>
    );
}