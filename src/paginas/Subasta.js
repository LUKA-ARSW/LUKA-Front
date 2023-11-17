import React from "react";
import TablaProductoSubasta from "../componentes/TablaProductoSubasta";

export default function Subasta() {
    return(
        <React.Fragment>
            <h1>Subasta</h1>
            <form action="/subasta" method="post">
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" id="nombre"></input>
                </div>
                <div>
                    <label>Inicia el:</label>
                    <input type="datetime-local" name="fechaInicio" id="fechaInicio"></input>
                </div>
                <div>
                    <label>Finaliza el:</label>
                    <input type="datetime-local" name="fechaFin" id="fechaFin"></input>
                </div>

                <div>
                    <TablaProductoSubasta/>
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </React.Fragment>

    );
};