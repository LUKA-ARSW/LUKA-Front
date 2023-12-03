import React from "react";
import SubastasActivas from "./SubastasActivas";
import SubastasProgramadas from "./SubastasProgramadas";


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