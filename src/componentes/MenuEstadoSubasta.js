import React from "react";
import SubastasActivas from "../componentes/SubastasActivas";
import SubastasProgramadas from "../componentes/SubastasProgramadas";


export default function MenuEstadoSubasta() {
    const [pestanaActual, setPestanaActual] = React.useState("activas");

    return (
        <React.Fragment>
            <button type = "button" onClick={()=>setPestanaActual("activas")}>Activas</button>
            <button type = "button" onClick={()=>setPestanaActual("programadas")}>Programadas</button>
            {pestanaActual === "activas" && <SubastasActivas/>}
            {pestanaActual === "programadas" && <SubastasProgramadas/>}
        </React.Fragment>
    );
}