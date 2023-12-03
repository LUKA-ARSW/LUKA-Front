import React from "react";

import MisSubastasProgramadas from "./MisSubastaProgramadas";
import MisSubastasActivas from "./MisSubastasActivas";

export default function MenuEstadoMisSubastas() {
    const [pestanaActual, setPestanaActual] = React.useState("activas");

    return (
        <React.Fragment>
            <button type = "button" onClick={()=>setPestanaActual("activas")}>Activas</button>
            <button type = "button" onClick={()=>setPestanaActual("programadas")}>Programadas</button>
            {pestanaActual === "activas" && <MisSubastasActivas/>}
            {pestanaActual === "programadas" && <MisSubastasProgramadas/>}
        </React.Fragment>
    );
};