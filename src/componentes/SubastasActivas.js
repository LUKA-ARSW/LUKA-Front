import React from "react";


import SeccionSubasta from "../componentes/SeccionSubasta";

export default function Subastas() {
    return (
      <div className="subastas">
        <SeccionSubasta titulo ="Subastas de larga duración"/>
        <SeccionSubasta titulo ="Subastas en tiempo real"/>
      </div>
    );
}
