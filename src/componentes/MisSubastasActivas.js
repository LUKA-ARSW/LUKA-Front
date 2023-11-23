import React from "react";
import SeccionMisSubastasActivas from "./SeccionMisSubastasActivas";

export default function MisSubastasActivas() {
    return(
        <div className="misSubastas">
            <SeccionMisSubastasActivas titulo ="Subastas de larga duración"/>
            <SeccionMisSubastasActivas titulo ="Subastas en tiempo real"/>
        </div>
    );
};