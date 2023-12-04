import React from "react";
import Banner from "../componentes/Banner";
import Menu from "../componentes/Menu";
import TablaProductoSubasta from "../componentes/TablaProductoSubasta";

export default function AgregarSubasta() {

    const [tipoS, setTipoSubasta] = React.useState("larga");

    const tipoSubasta = (nuevoTipoSubasta) => {
        setTipoSubasta(nuevoTipoSubasta);
    }

    const agregarSubasta = (event) => {};
    
    return(
        <React.Fragment>
            <Banner/>
            <Menu/>
            <h1>Subasta</h1>
            <form onSubmit={agregarSubasta}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" id="nombre" required></input>
                </div>
                <div>
                    <label>Inicia el:</label>
                    <input type="datetime-local" name="fechaInicio" id="fechaInicio" required></input>
                </div>
                <div>
                    <label>Finaliza el:</label>
                    <input type="datetime-local" name="fechaFin" id="fechaFin" required></input>
                </div>

                <div>
                    <label>Tipo subasta:</label>
                    <input type="radio" checked={tipoS === "larga"} value="larga" onChange={()=>tipoSubasta("larga")} required></input>
                    <label>Larga</label>

                    <input type="radio" checked={tipoS === "corta"}  value="corta" onChange={()=>tipoSubasta("corta")} required></input>
                    <label>Corta</label>
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